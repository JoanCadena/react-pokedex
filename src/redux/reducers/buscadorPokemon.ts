import {
  FETCH_POKEMON_FAILURE,
  FETCH_POKEMON_SUCCESS,
  FETCH_POKEMON_REQUEST,
} from "../actions/buscador";
import { PayloadAction } from "@reduxjs/toolkit";
import { Pokemon } from "../../interface/Interface";

const initialState = {
  loading: false,
  pokemon: [],
  error: "",
};

interface Error {
  mensaje: String;
}

const buscadorPokemon = (state = initialState, action: PayloadAction<Error | null>) => {
  switch (action.type) {
    case FETCH_POKEMON_REQUEST:
      return {
        loading: true,
        pokemon: [],
        error: "",
      };
    case FETCH_POKEMON_SUCCESS:
      return {
        loading: false,
        pokemon: action.payload,
        error: "",
      };
    case FETCH_POKEMON_FAILURE:
      return {
        loading: false,
        pokemon: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default buscadorPokemon;
