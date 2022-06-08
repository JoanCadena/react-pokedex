import { useEffect, useState, ChangeEvent  } from "react";
import { Link } from "react-router-dom";
import PokeItem from "../components/PokeItem";
import { Pokemon } from "../interface/Interface";
import "../css/PokeStyles.css";

const PokeDex = () => {
  const [listPokemons, setListPokemons] = useState<Pokemon[]>([]);
  const [search, setSearch] = useState("/pokedex/");
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );

  const onChangeHandler = (data: ChangeEvent<HTMLInputElement>) => {
    setSearch("/pokedex/" + data.target.value);
  };

  const getListPokemons = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();

    setLoadMore(data.next);

    const createPokemonObject = (results: Pokemon[]) => {
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
      <div className="cont_search">
        <h2 className="search_title">
          You're looking for a specific Pokemon?{" "}
        </h2>
        <input
          id="name"
          placeholder="Name or Number"
          className="search_input"
          onChange={onChangeHandler}
        />
        <Link to={search}>
          <input
            className="search_button"
            type="button"
            value="let's go"
          />
        </Link>
      </div>
      <div className="cont_list">
        {listPokemons.map((pokemonInfo, index) => (
          <PokeItem
            {...pokemonInfo}
            key={index}
            img={
              pokemonInfo.sprites.other.dream_world.front_default !== null
                ? pokemonInfo.sprites.other.dream_world.front_default
                : pokemonInfo.sprites.front_default
            }
            types={pokemonInfo.types}
            page="pokedex"
          />
        ))}
      </div>
      <div className="cont_button">
        <button
          className="button_load"
          onClick={() => getListPokemons()}
        >
          Load more...
        </button>
      </div>
    </div>
  );
};

export default PokeDex;
