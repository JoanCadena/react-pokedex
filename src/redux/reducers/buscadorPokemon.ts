import {
  FETCH_POKEMON_FAILURE,
  FETCH_POKEMON_SUCCESS,
  FETCH_POKEMON_REQUEST,
} from "../actions/buscador_pokemon";
import { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  pokemon: [],
  error: "",
};

interface Error {
  mensaje: String;
}

const buscadorPokemon = (
  state = initialState,
  action: PayloadAction<any>
) => {
  switch (action.type) {
    case FETCH_POKEMON_REQUEST:
      return {
        ...state,
        loading: true,
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
