import React from 'react'
import ReactDOM from 'react-dom/client'
import './CSS/main.css'
import './CSS/Start.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'
import Index from './Index.jsx'

const router = createBrowserRouter([
  {
    path:"/UI_UMA/",
    element: <Index />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)