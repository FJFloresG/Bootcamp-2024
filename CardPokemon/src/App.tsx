import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  const fetchRandomPokemon = () => {
    const randomId = Math.floor(Math.random() * 898) + 1;  // Hay 898 Pokémon en la PokéAPI
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
      .then(response => response.json())
      .then(data => setPokemon(data))
      .catch(error => console.error('Error fetching Pokémon data:', error));
  };

  useEffect(() => {
    fetchRandomPokemon();
  }, []);

  return (
    <div className="App">
      {pokemon ? <Card pokemon={pokemon} /> : <p>Loading...</p>}
      <button onClick={fetchRandomPokemon}>Other Pokémon</button>
    </div>
  );
}

interface Pokemon {
  id: number;
  name: string;
  sprites: { front_default: string };
  types: { type: { name: string } }[];
}

export default App;
