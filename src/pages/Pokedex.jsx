import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PokeItem from "../components/PokeItem";

const PokeDex = () => {
  const [listPokemons, setListPokemons] = useState([]);
  const [search, setSearch] = useState("/pokedex/");
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );

  const onChangeHandler = (data) => {
    setSearch("/pokedex/" + data.target.value);
  };

  const getListPokemons = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();

    setLoadMore(data.next);

    const createPokemonObject = (results) => {
      results.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        setListPokemons((currentList) => [...currentList, data]);
        await listPokemons.sort((prev, nxt) => prev.id - nxt.id);
      });
    };

    createPokemonObject(data.results);
  };

  useEffect(() => {
    getListPokemons();
  }, []);

  return (
    <div>
      <div>
        <h2>Search your pokemon</h2>
        <input
          id="name"
          placeholder="Name or Number"
          onChange={onChangeHandler}
        />
        <Link to={search}>
          <input type="button" value="let's go" />
        </Link>
        <hr />
      </div>
      <div>
        {listPokemons.map((pokemonInfo, index) => (
          <PokeItem
            {...pokemonInfo}
            key={index}
            image={pokemonInfo.sprites.other.dream_world.front_default}
            type={pokemonInfo.types.map((type) => {
              return type.type.name;
            })}
            page="pokedex"
          />
        ))}
      </div>
      <button onClick={() => getListPokemons()}>Load more</button>
    </div>
  );
};

export default PokeDex;
