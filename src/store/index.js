import { createStore } from 'easy-peasy'
import playlistModel from './playlistModel'
import favoriteModel from './favouriteModel'
import recentModel from './recentModel'

const store = createStore({
  playlists: playlistModel,
  favorites: favoriteModel,
  recents: recentModel
})

export default store
