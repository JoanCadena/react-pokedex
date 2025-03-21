import { IPokemon } from "./../../interfaces/pokemon";
import {
  fetchPokemonFailure,
  fetchPokemonRequest,
  fetchPokemonSuccess,
} from "../actions/search";
import { PayloadAction } from "@reduxjs/toolkit";

interface Error {
  mensaje: String;
}

const initialState = {
  loading: null,
  pokemon: {} as IPokemon,
  error: {} as Error,
};

const pokemonSearch = (
  state = initialState,
  action: PayloadAction<IPokemon | Error>
) => {
  switch (action.type) {
    case fetchPokemonRequest.type:
      return {
        loading: true,
        pokemon: {},
        error: {},
      };
    case fetchPokemonSuccess.type:
      return {
        loading: false,
        pokemon: action.payload,
        error: {},
      };
    case fetchPokemonFailure.type:
      return {
        loading: false,
        pokemon: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

export default pokemonSearch;
