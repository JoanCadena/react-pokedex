import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import PokeInfo from "../components/PokeInfo";

const PokeDetails = () => {
  const params = useParams();
  const [pokemon, setPokemon] = useState([]);
  const url = `https://pokeapi.co/api/v2/pokemon/${params.pokeId}`;

  const getPokemon = async () => {
    const res = await fetch(url);
    const data = await res.json();

    const createPokemonObject = () => {
      setPokemon((currentList) => [...currentList, data]);
    };

    createPokemonObject();
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <>
      <Link to="/pokedex">Volver</Link>
      {pokemon.map((pokemonInfo, index) => (
        <PokeInfo
          key={index}
          name={pokemonInfo.name}
          id={pokemonInfo.id}
          image={pokemonInfo.sprites.other.dream_world.front_default}
          height={pokemonInfo.height}
          weight={pokemonInfo.weight}
          base_experience={pokemonInfo.base_experience}
          types={pokemonInfo.types}
          abilities={pokemonInfo.abilities}
          stats={pokemonInfo.stats}
        />
      ))}
    </>
  );
};

export default PokeDetails;
