import React from 'react';
import '../Style/Image.css';

interface PokemonImageProps {
  imageUrl: string;
}

const PokemonImage: React.FC<PokemonImageProps> = ({ imageUrl }) => {
  return (
    <div className="pokemon-image">
      <img src={imageUrl} alt="Pokemon" />
    </div>
  );
};

export default PokemonImage;
