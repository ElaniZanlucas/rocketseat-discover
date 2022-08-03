import React from 'react'
import ReactDOM from 'react-dom/client'
// Ao invés de utilizar na Home export default, acrescentou-se {} no import
import { Home } from './pages/Home'
import "./styles/global.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
)
