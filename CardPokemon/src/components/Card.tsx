import React from 'react';
import '../Style/Card.css';
import PokemonImage from './Image';
import PokemonInfo from './IdName';
import PokemonType from './Type';
import { pokemonColorMap } from '../pokemonColorHash';
import { darkenColor, getReadableTextColor } from '../TypeColor';

interface Pokemon {
  id: number;
  name: string;
  sprites: { front_default: string };
  types: { type: { name: string } }[];
}

interface CardProps {
  pokemon: Pokemon;
}

const Card: React.FC<CardProps> = ({ pokemon }) => {
  const backgroundColor = pokemonColorMap[pokemon.id.toString()] || '#fff';
  const typeBackgroundColor = darkenColor(backgroundColor, 20);
  const textColor = getReadableTextColor(backgroundColor);

  return (
    <div className="card" style={{ backgroundColor, color:textColor }}>
      <PokemonImage imageUrl={pokemon.sprites.front_default} />
      <PokemonInfo name={pokemon.name} id={pokemon.id} textColor={textColor} />
      <PokemonType type={pokemon.types[0].type.name} backgroundColor={typeBackgroundColor} />
    </div>
  );
};

export default Card;

