import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PokeItem from "../components/PokeItem";
import { Pokemon } from "../interface/Interface";
import "../css/PokeStyles.css";

const MyList = () => {
  const [myListPokemons, setListPokemons] = useState<Pokemon[]>([]);

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

  if (myListPokemons.length !== 0) {
    return (
      <div className="cont_list">
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
    );
  }
  return (
    <div className="no_pokemons">
      <h1>No Pokemons found</h1>
      <Link to="/pokedex">
        <button className="button_load">See all Pokemons</button>
      </Link>
    </div>
  );
};

export default MyList;
