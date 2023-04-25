import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import PageSetup from './components/PageSetup.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <PageSetup />
  </React.StrictMode>,
)
