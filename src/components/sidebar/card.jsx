import React from 'react'
import { Link } from 'react-router-dom'

function SidebarCard ({ item, playlistId }) {
  return (
    <div>
      <Link
        className='side-card-title'
        to={`/player/${playlistId}/${item.contentDetails.videoId}`}
      >
        <img
          src={item?.thumbnail?.url}
          alt='Thumbnail'
          width='100%'
          height='130'
        />
        <h4>
          {`${
            item.title.length > 45
              ? item.title.substr(0, 45) + '...'
              : item.title
          }`}
        </h4>
      </Link>
    </div>
  )
}

export default SidebarCard
