import { IPokemon } from "../interfaces/pokemon";
import PokeInfo from "../components/PokeInfo";
import styles from "../styles/details.module.scss";
import "../styles/colors.css";
import PokeBallImage from "../assets/pokedex.svg";
import LoadingSpinner from "../assets/loading.svg";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Link, useParams } from "react-router";
import { useEffect } from "react";
import { useAppDispatch } from "../redux/store";
import fetchPokemon from "../redux/actions/search";

interface Props {
  page: string;
}

interface Error {
  message: String;
}

const Details = (props: Props) => {
  const pokemonSearchState = useSelector((state: RootState) => state.pokemon);
  const pokemon = pokemonSearchState.pokemon as IPokemon;
  const error = pokemonSearchState.error as Error;
  const dispatch = useAppDispatch();
  const params = useParams<{ pokeId: string }>();

  useEffect(() => {
    if (pokemonSearchState.loading == null) {
      dispatch(fetchPokemon(params.pokeId as string));
    }
  }, []);

  console.log(pokemonSearchState);

  return (
    <>
      {pokemonSearchState.loading && (
        <div className={`${styles.infoContainer} ${styles.pageContainer}`}>
          <div className={styles.loadingContainer}>
            <img
              src={LoadingSpinner}
              alt="Loading spinner"
              style={{ maxWidth: 64, margin: "0 auto" }}
            />
          </div>
        </div>
      )}
      {pokemonSearchState.loading == false &&
        Object.keys(pokemonSearchState.pokemon).length > 0 && (
          <div
            className={`${styles.infoContainer} ${pokemon.types[0].type.name}`}
          >
            <img
              src={PokeBallImage}
              alt="Weight icon"
              className={styles.pokedexImage}
            />
            <PokeInfo
              pokemon={pokemon}
              img={
                pokemon.sprites.other.dream_world.front_default !== null
                  ? pokemon.sprites.other.dream_world.front_default
                  : pokemon.sprites.front_default
              }
              page={props.page}
            />
          </div>
        )}
      {pokemonSearchState.loading == false &&
        Object.keys(pokemonSearchState.error).length > 0 && (
          <div className={`${styles.infoContainer} ${styles.pageContainer}`}>
            <div className={styles.loadingContainer}>
              <h1
                style={{
                  margin: "0 auto",
                  textAlign: "center",
                }}
              >
                {error?.message}
              </h1>
              <Link to="/">
                <button
                  className={`${styles.button} ${styles.backButton}`}
                  style={{ margin: 0 }}
                >
                  Back
                </button>
              </Link>
            </div>
          </div>
        )}
    </>
  );
};

export default Details;
