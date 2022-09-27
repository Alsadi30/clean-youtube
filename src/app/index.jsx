import HomePage from '../pages/home'
import PlayerPage from '../pages/playerPage'
import NotFound from '../pages/notFound'
import Navbar from '../components/navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App () {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/player/:playlistId/:videoId' element={<PlayerPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
