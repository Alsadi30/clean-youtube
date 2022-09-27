import React from 'react'
import ReactDOM from 'react-dom/client'
import { StoreProvider } from 'easy-peasy'
import reportWebVitals from './reportWebVitals'
import App from '../src/app'
import store from './store'
import '../src/assets/style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StoreProvider store={store}>
    <div className='root'>
      <App />
    </div>
  </StoreProvider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
