import { useState } from 'react'
import { Link } from 'react-router-dom'
import PlaylistForm from '../playlistform'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div className='nab'>
      <div>
        <Link className='nab-title' to='/'>
          <h4>Clean Youtube</h4>
        </Link>
        <Link
          className='nab-sub'
          href='https://stacklearner.com'
          target={'_blank'}
        >
          <p>By Stack Learner</p>
        </Link>
      </div>
      <button className='nab-btn' variant='contained' onClick={handleClickOpen}>
        Add Playlist
      </button>
      <PlaylistForm open={open} handleClose={handleClose} />
    </div>
  )
}

export default Navbar
