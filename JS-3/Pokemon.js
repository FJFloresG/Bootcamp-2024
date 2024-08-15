const url = 'https://pokeapi.co/api/v2/pokemon';

function getPokemon(id) {
  return fetch(`${url}/${id}`)
    .then(response => response.json())
    .then(data => data);
}

async function getPokemonName(id) {
  const response = await fetch(`${url}/${id}`);
  const data = await response.json();
  return data.name;
}

function getImageID(id) {
  const imageString = '00' + id;
  return imageString.slice(-3);
}

function getRandomPokemon() {
  const randomId = Math.floor(Math.random() * 898) + 1; 
  return getPokemon(randomId);
}

async function startGame() {
  const mainPokemon = await getRandomPokemon();
  const mainPokemonId = getImageID(mainPokemon.id);
  const mainPokemonName = mainPokemon.name;

  const options = new Set(); 
  options.add(mainPokemonName); 

  while (options.size < 3) {
    const randomPokemonName = await getPokemonName(Math.floor(Math.random() * 898) + 1);
    options.add(randomPokemonName);
  }

  const shuffledOptions = Array.from(options).sort(() => Math.random() - 0.5);

  const pokemonInfoDiv = document.getElementById('pokemon-info');
  pokemonInfoDiv.innerHTML = `
    <img class="hide" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${mainPokemonId}.png">
    <p>Height: ${mainPokemon.height}</p>
    <p>Weight: ${mainPokemon.weight}</p>
    <p>Type: ${mainPokemon.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
    ${shuffledOptions.map(option => `<button class="option-button" onclick="checkAnswer('${option}', '${mainPokemonName}')">${option}</button>`).join('')}
    <div id="result-message" class="result-message"></div>
  `;
}

function checkAnswer(selectedOption, correctOption) {
  const resultMessageDiv = document.getElementById('result-message'); 
  const pokemonImg = document.getElementById('pokemon-img');
  if (selectedOption === correctOption) { 
    //pokemonImg.classList.add('hide');
    //pokemonImg.classList.add('show');
    resultMessageDiv.innerHTML = '¡Correct! ¡You need to guess the next pookemon!';
    setTimeout(startGame, 2000); 
  } else { 
        resultMessageDiv.innerHTML = '¡Incorrect!';
  }
}

window.onload = startGame;