import { combineReducers, configureStore } from "@reduxjs/toolkit";
import pokemonSearch from "./reducers/pokemonSearch";
import { useDispatch } from "react-redux";

const rootReducer = combineReducers({
  pokemon: pokemonSearch,
});

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;
export default store;
