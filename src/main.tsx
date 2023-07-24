import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./scss/App.scss"
import { HashRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router basename='/hollowdale-character-sheets'>
      <App />
    </Router>
  </React.StrictMode>,
)
