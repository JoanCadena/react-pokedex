import { useState, useEffect } from "react";
import { Link } from "react-router";
import PokeItem from "../components/PokeCard";
import { IPokemon } from "../interfaces/pokemon";
import styles from "../styles/myList.module.scss";
import Search from "../components/Search";

const MyList = () => {
  const [myListPokemons, setListPokemons] = useState<IPokemon[]>([]);

  const getListPokemons = () => {
    for (const key in localStorage) {
      if (localStorage.getItem(key) !== null) {
        setListPokemons((prevLits) => {
          return [JSON.parse(localStorage.getItem(key) || "{}"), ...prevLits];
        });
      }
      myListPokemons.sort((prev, nxt) => prev.id - nxt.id);
    }
  };

  useEffect(() => {
    getListPokemons();
  }, []);

  return (
    <div className={styles.pageContainer}>
      <Search />
      {myListPokemons.length ? (
        <div className={styles.listContainer}>
          {myListPokemons.map((pokemonInfo, index) => (
            <PokeItem
              {...pokemonInfo}
              key={index}
              img={
                pokemonInfo.sprites.other.dream_world.front_default !== null
                  ? pokemonInfo.sprites.other.dream_world.front_default
                  : pokemonInfo.sprites.front_default
              }
              types={pokemonInfo.types}
              page="mylist"
            />
          ))}
        </div>
      ) : (
        <div className={styles.noPokemons}>
          <h1>No Pokemons found</h1>
          <Link to="/pokedex">
            <button className={styles.backButton}>See all Pokemons</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default MyList;
