import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PokeItem from "../components/PokeItem";
import styles from '../css/PokeStyles.module.css'

const MyList = () => {
  const [myListPokemons, setListPokemons] = useState([]);

  const getListPokemons = () => {
    for (const key in localStorage) {
      if (localStorage.getItem(key) != null) {
        setListPokemons((prevLits) => {
          return [JSON.parse(localStorage.getItem(key)), ...prevLits];
        });
      }
      myListPokemons.sort((prev, nxt) => prev.id - nxt.id);
    }
  };

  useEffect(() => {
    getListPokemons();
  }, []);

  if (myListPokemons.length != 0) {
    return (
        <div className={styles.cont_list}>
        {myListPokemons.map((pokemonInfo, index) => (
          <PokeItem
            {...pokemonInfo}
            key={index}
            image={pokemonInfo.sprites.other.dream_world.front_default}
            type={pokemonInfo.types.map((type) => {
              return type.type.name;
            })}
            page='mylist'
          />
        ))}
      </div>
    );
  }
  return (
      <div>
          <h1>Ningun pokemon encontrado</h1>
          <Link to='/pokedex'>Ver todos los Pokemones</Link>
      </div>
  );
};

export default MyList;
