import { useEffect, useState } from "react";
import { IPokemon } from "../interfaces/pokemon";
import PokeCard from "../components/PokeCard";
import SearchBar from "../components/SearchBar";
import styles from "../styles/pokedex.module.scss";

const PokeDex = () => {
  const [listPokemons, setListPokemons] = useState<IPokemon[]>([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );

  const getListPokemons = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();

    setLoadMore(data.next);

    const createPokemonObject = (results: IPokemon[]) => {
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
    <div className={styles.pageContainer}>
      <SearchBar />
      <section className={styles.listContainer}>
        {listPokemons.map((pokemonInfo, index) => (
          <PokeCard
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
      </section>
      {/* Update to add infinite scroll */}
      <section className={styles.buttonContainer}>
        <button className={styles.button} onClick={() => getListPokemons()}>
          Load more...
        </button>
      </section>
    </div>
  );
};

export default PokeDex;
