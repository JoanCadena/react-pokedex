import Axios from "axios";
import { Pokemon } from "../../interface/Interface";
import { AppDispatch } from "../store";

export const FETCH_POKEMON_REQUEST = "POKEMON_REQUEST";
export const FETCH_POKEMON_SUCCESS = "POKEMON_SUCCESS";
export const FETCH_POKEMON_FAILURE = "POKEMON_FAILURE";

interface Error {
  mensaje: String;
}

//Actions
export const fetchPokemonRequest = () => {
  return {
    type: FETCH_POKEMON_REQUEST,
    payload: null
  };
};

export const fetchPokemonSuccess = (Pokemon: any) => {
  return {
    type: FETCH_POKEMON_SUCCESS,
    payload: Pokemon,
  };
};

export const fetchPokemonFailure = (error: Error) => {
  return {
    type: FETCH_POKEMON_FAILURE,
    payload: error,
  };
};

const fetchPokemon = (info: String | Number) => {
  return (dispatch: AppDispatch) => {
    dispatch(fetchPokemonRequest());
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${info}`)
      .then((res) => {        
        dispatch(fetchPokemonSuccess([res.data]));
      })
      .catch((err) => {
        dispatch(fetchPokemonFailure({ mensaje: "No se encontró el pokemon" }));
      });
  };
};

export default fetchPokemon;
