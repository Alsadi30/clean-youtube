import { useEffect } from 'react'
import { useStoreActions, useStoreState } from 'easy-peasy'
import PlaylistCardItem from '../../components/playlistcarditem'
import PlaylistAddCheckOutlinedIcon from '@mui/icons-material/PlaylistAddCheckOutlined'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined'
import RestoreSharpIcon from '@mui/icons-material/RestoreSharp'

const playlistID = 'PL_XxuZqN0xVD0op-QDEgyXFA4fRPChvkl'

const HomePage = () => {
  const playlist = useStoreActions(actions => actions.playlists)

  const { playlists, favorites, recents } = useStoreState(state => state)

  useEffect(() => {
    playlist.getPlaylist(playlistID)
  }, [playlist])

  return (
    <div className='home'>
      <div>
        <div className='sec-head'>
          <PlaylistAddCheckOutlinedIcon />
          <h3 className='sec-head-title'>Playlists</h3>
        </div>
        {!playlists.data ? (
          <div>There is No Playlist Added Yet</div>
        ) : (
          <ul className='card-sec'>
            {Object.keys(playlists.data).map(function (keyName, keyIndex) {
              let item = playlists.data[keyName]
              return (
                <li className='card' key={keyName}>
                  {
                    <PlaylistCardItem
                      key={item.playlistId}
                      playlistId={item.playlistId}
                      playlistThumbnail={item.playlistThumbnail}
                      playlistTitle={item.playlistTitle}
                      channelTitle={item.channelTitle}
                      videoId={item.playlistItems[0].contentDetails.videoId}
                    />
                  }
                  {/* {console.log(playlists[keyName])} */}
                </li>
              )
            })}
          </ul>
        )}
      </div>
      <div>
        <div className='sec-head'>
          <FavoriteOutlinedIcon />
          <h3 className='sec-head-title'>Favorite Playlists</h3>
        </div>
        <ul className='card-sec'>
          {favorites &&
            favorites?.items.map((u, i) => {
              let item = playlists.data[u]

              return (
                <li className='card' key={i}>
                  {
                    <PlaylistCardItem
                      key={item.playlistId}
                      playlistId={item.playlistId}
                      playlistThumbnail={item.playlistThumbnail}
                      playlistTitle={item.playlistTitle}
                      channelTitle={item.channelTitle}
                      videoId={item.playlistItems[0].contentDetails.videoId}
                    />
                  }
                  {/* {console.log(playlists[keyName])} */}
                </li>
              )
            })}
        </ul>
      </div>
      <div>
        <div className='sec-head'>
          <RestoreSharpIcon />
          <h3 className='sec-head-title '>Recent Playlists</h3>
        </div>
        <ul className='card-sec'>
          {recents &&
            recents.items?.map((u, i) => {
              let item = playlists.data[u]
              if (item) {
                return (
                  <li className='card' key={i}>
                    {
                      <PlaylistCardItem
                        key={item.playlistId}
                        playlistId={item.playlistId}
                        playlistThumbnail={item.playlistThumbnail}
                        playlistTitle={item.playlistTitle}
                        channelTitle={item.channelTitle}
                        videoId={item.playlistItems[0].contentDetails.videoId}
                      />
                    }
                    {/* {console.log(playlists[keyName])} */}
                  </li>
                )
              }
            })}
        </ul>
      </div>
    </div>
  )
}
export default HomePage
