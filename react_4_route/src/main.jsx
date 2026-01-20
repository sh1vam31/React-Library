import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  // akk page se dusre page mai jaa sakte hai with the help of routes
  // routes ko use karne ke liye phle ham react-router-dom ko install karte hai -- npm i react-router-dom
  <BrowserRouter>
      <App />
  </BrowserRouter>


)
