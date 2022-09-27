import * as React from 'react'
import { Link } from 'react-router-dom'
import { PlayCircleOutline } from '@mui/icons-material'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined'
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded'
import { useStoreActions, useStoreState } from 'easy-peasy'

const PlaylistCardItem = ({
  playlistThumbnail,
  playlistTitle,
  channelTitle,
  playlistId,
  videoId
}) => {
  const favourites = useStoreState(state => state.favorites)

  const { playlists, favorites, recents } = useStoreActions(actions => actions)
  console.log(favourites.items)

  const isFavorite = favourites.items.some(u => playlistId === u)

  const handleFavourite = () => {
    if (!isFavorite) {
      favorites.addToFavorite(playlistId)
    } else {
      favorites.removeFromFavorite(playlistId)
    }
  }

  const handleDelete = () => {
    playlists.removePlaylist(playlistId)
    if (isFavorite) {
      favorites.removeFromFavorite(playlistId)
    }
  }

  const handleRecent = () => {
    recents.addToRecent(playlistId)
  }

  return (
    <div className='card-body'>
      <img src={playlistThumbnail.url} alt='Thumbnail' className='img' />

      <h3 className='playlist-title'>
        {`${
          playlistTitle.length > 50
            ? playlistTitle.substr(0, 50) + '...'
            : playlistTitle
        }`}
      </h3>

      <p className='chn-title'>{channelTitle}</p>
      <div className='card-bottom'>
        <Link
          className='play-link'
          to={`/player/${playlistId}/${videoId}`}
          component={Link}
          onClick={handleRecent}
        >
          <PlayCircleOutline />

          <p className='start'>Start Tutorial</p>
        </Link>
        <div>
          <button className='btn' onClick={handleFavourite}>
            {isFavorite ? (
              <FavoriteOutlinedIcon />
            ) : (
              <FavoriteBorderOutlinedIcon />
            )}
          </button>
          <button className='btn' onClick={handleDelete}>
            <DeleteForeverRoundedIcon />
          </button>
        </div>
      </div>
    </div>
  )
}

export default PlaylistCardItem
