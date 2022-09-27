import React from 'react'
import YouTube from 'react-youtube'

function Player ({ videoId, item }) {
  const onPlayerReady = event => {
    // access to player in all event handlers via event.target
    // event.target.pauseVideo()
  }

  const opts = {
    width: '100%',
    height: '400px',

    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
  }
  console.log(item[0].title)
  return (
    <div className='play-sec'>
      <div className='player'>
        <YouTube videoId={videoId} opts={opts} onReady={onPlayerReady} />

        <h3 className='title'>{item[0].title}</h3>
      </div>
      <p className='descrip'>{item[0].description}</p>
    </div>
  )
}

export default Player
