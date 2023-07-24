import React from 'react'
import Character from './components/Character';
import { Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Character />} />
      </Routes>
    </div>
  )
}

export default App;