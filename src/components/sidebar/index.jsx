import React from 'react'
import SidebarCard from './card'

function Sidebar ({ items, playlistId }) {
  console.log(items)
  return (
    <div className='sidebar'>
      <ul className='ul-content'>
        {items &&
          items.map(u => {
            return (
              <li className="side-card">
                <SidebarCard item={u} playlistId={playlistId} />
              </li>
            )
          })}
      </ul>
    </div>
  )
}

export default Sidebar
