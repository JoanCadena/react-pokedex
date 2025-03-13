import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { IPokemon } from "../interfaces/pokemon";
import PokeInfo from "../components/PokeInfo";
import styles from "../styles/details.module.scss";
import "../styles/colors.css";
import PokeBallImage from "../assets/pokedex.svg";

interface Props {
  page: string;
}

const Details = (props: Props) => {
  const params = useParams<{ pokeId: string }>();
  const [pokemon, setPokemon] = useState<IPokemon>();
  const url = `https://pokeapi.co/api/v2/pokemon/${params.pokeId}`;

  const getPokemon = async () => {
    const res = await fetch(url);
    const data = await res.json();

    setPokemon(data);
  };

  const savePokemon = (info: IPokemon) => {
    const pokemonInfo = JSON.stringify(info);
    localStorage.setItem(String(info.id), pokemonInfo);
    alert(info.name + " ha sido correctamente añadido a tu lista");
  };

  const deletePokemon = (info: IPokemon) => {
    localStorage.removeItem(String(info.id));
    alert(info.name + " se ha eliminado correctamente de tu lista");
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <>
      {pokemon ? (
        <div
          className={`${styles.infoContainer} ${pokemon.types[0].type.name}`}
        >
          <img
            src={PokeBallImage}
            alt="Weight icon"
            className={styles.pokedexImage}
          />
          <PokeInfo
            {...pokemon}
            img={
              pokemon.sprites.other.dream_world.front_default !== null
                ? pokemon.sprites.other.dream_world.front_default
                : pokemon.sprites.front_default
            }
            page={props.page}
          />
          {/* Update to add this button in the PokeInfo Card */}
          <section className={styles.buttonContainer}>
            {props.page === "/mylist" ? (
              <button
                onClick={() => deletePokemon(pokemon)}
                className={styles.button}
              >
                Delete from my list
              </button>
            ) : (
              <button
                onClick={() => savePokemon(pokemon)}
                className={styles.button}
              >
                Save in my list
              </button>
            )}
          </section>
        </div>
      ) : (
        // Update to add loading animation and error catching
        <h3>Loading...</h3>
      )}
    </>
  );
};

export default Details;
