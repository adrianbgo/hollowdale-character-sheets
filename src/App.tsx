import React from 'react'
import Character from './components/Character';
import { Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/hollowdale-character-sheets" element={<Character />} />
        <Route path="/hollowdale-character-sheets/:id" element={<Character />} />
      </Routes>
    </div>
  )
}

export default App;