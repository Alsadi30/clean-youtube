import React from 'react'
import Player from '../../components/player'
import Sidebar from '../../components/sidebar'
import { useParams } from 'react-router-dom'
import { useStoreState } from 'easy-peasy'

function PlayerPage () {
  const param = useParams()

  const playlist = useStoreState(
    state => state.playlists.data[param.playlistId]
  )

  let forPlay = playlist.playlistItems.filter(
    u => u.contentDetails.videoId === param.videoId
  )

  console.log(forPlay)

  return (
    <div className='player-page'>
      <h1 className='playlist-t'>{playlist.playlistTitle}</h1>
      <p className='playlist-d'>{playlist.playlistDescription}</p>
      <div className='player-page-body'>
        <Sidebar items={playlist.playlistItems} playlistId={param.playlistId} />
        <Player videoId={param.videoId} item={forPlay} />
      </div>
    </div>
  )
}

export default PlayerPage
