import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PokeItem from "../components/PokeItem";
import styles from '../css/PokeStyles.module.css'

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
      <div className={styles.cont_search}>
        <h2 className={styles.search_title}>You're looking for a specific Pokemon? </h2>
        <input
          id="name"
          placeholder="Name or Number"
          className={styles.search_input}
          onChange={onChangeHandler}
        />
        <Link to={search}>
          <input className={styles.search_button} type="button" value="let's go"/>
        </Link>
      </div>
      <div className={styles.cont_list}>
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
      <div className={styles.cont_button}>
        <button className={styles.button_load} onClick={() => getListPokemons()}>Load more</button>
      </div>
    </div>
  );
};

export default PokeDex;
