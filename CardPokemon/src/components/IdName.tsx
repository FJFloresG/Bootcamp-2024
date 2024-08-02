import React from 'react';
import '../Style/IdName.css';


interface PokemonInfoProps {
  id: number;
  name: string;
  textColor: string;
}

const PokemonInfo: React.FC<PokemonInfoProps> = ({ name, id , textColor}) => {
  return (
    <div className="pokemon-info" style={{ color: textColor }}>
      <div className="pokemon-id">#{id}</div>
      <div className="pokemon-name">{name}</div>
    </div>
  );
};

export default PokemonInfo;
