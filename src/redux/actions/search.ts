import { AppDispatch } from "../store";
import { IPokemon } from "./../../interfaces/pokemon";
import { createAction } from "@reduxjs/toolkit";

interface Error {
  message: String;
}

// Types
export const FETCH_POKEMON_REQUEST = "POKEMON_REQUEST";
export const FETCH_POKEMON_SUCCESS = "POKEMON_SUCCESS";
export const FETCH_POKEMON_FAILURE = "POKEMON_FAILURE";

// Actions
export const fetchPokemonRequest = createAction(FETCH_POKEMON_REQUEST);
export const fetchPokemonSuccess = createAction(
  FETCH_POKEMON_SUCCESS,
  (pokemon: IPokemon) => {
    return { payload: pokemon };
  }
);
export const fetchPokemonFailure = createAction(
  FETCH_POKEMON_FAILURE,
  (error: Error) => {
    return { payload: error };
  }
);

const fetchPokemon = (info: String | Number) => {
  return (dispatch: AppDispatch) => {
    dispatch(fetchPokemonRequest());

    fetch(`https://pokeapi.co/api/v2/pokemon/${info}`, {
      signal: AbortSignal.timeout(5000),
    }).then((res) => {
      res
        .json()
        .then((pokemon: IPokemon) => {
          dispatch(fetchPokemonSuccess(pokemon));
        })
        .catch(() => {
          dispatch(fetchPokemonFailure({ message: "Pokemon not found" }));
        });
    });
  };
};

export default fetchPokemon;
