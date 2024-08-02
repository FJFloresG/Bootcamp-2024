import React from 'react';
import '../Style/Type.css';
import { getReadableTextColor } from '../TypeColor';


interface PokemonTypeProps {
  type: string;
  backgroundColor: string;
}
const PokemonType: React.FC<PokemonTypeProps> = ({ type, backgroundColor }) => {
  const textColor = getReadableTextColor(backgroundColor);
  return (
    <div className="pokemon-type"style={{ backgroundColor, color: textColor }}>
      <span>{type}</span>
    </div>
  );
};

export default PokemonType;