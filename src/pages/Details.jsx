import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import PokeInfo from "../components/PokeInfo";
import styles from "../css/PokeStyles.module.css";
import colors from "../css/Colors.module.css";

const Details = (props) => {
  const params = useParams();
  const [pokemon, setPokemon] = useState();
  const url = `https://pokeapi.co/api/v2/pokemon/${params.pokeId}`;

  const getPokemon = async () => {
    const res = await fetch(url);
    const data = await res.json();

    setPokemon(data);
  };

  const savePokemon = (info) => {
    const pokemonInfo = JSON.stringify(info);
    localStorage.setItem(info.id, pokemonInfo);
    alert(info.name + " ha sido correctamente añadido a tu lista");
  };

  const deletePokemon = (info) => {
    localStorage.removeItem(info.id);
    alert(info.name + " se ha eliminado correctamente de tu lista");
  };

  useEffect(() => {
    getPokemon();
  }, []);

  if (pokemon) {
    return (
      <>
        <PokeInfo
          {...pokemon}
          key={Math.random}
          image={
            pokemon.sprites.other.dream_world.front_default != null
              ? pokemon.sprites.other.dream_world.front_default
              : pokemon.sprites.front_default
          }
        />
        <div className={styles.cont_button}>
          {props.page == "/mylist" ? (
            <input
              type="button"
              value="Delete from my list"
              onClick={() => deletePokemon(pokemon)}
              className={styles.button_delete}
            />
          ) : (
            <input
              type="button"
              value="Save in my list"
              onClick={() => savePokemon(pokemon)}
              className={styles.button_add}
            />
          )}
          <Link to={props.page}>
            <button className={styles.button_back}>Get back</button>
          </Link>
        </div>
      </>
    );
  }
  return <h3>Loading...</h3>;
};

export default Details;
