import { Routes, Route } from 'react-router';
import './App.css';
import Character from './Pages/Character';
import CharactersList from './Pages/CharactersList';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={ <CharactersList /> } />
        <Route exact path="/:id" element={ <Character /> } />
      </Routes>
    </div>
  );
}

export default App;
