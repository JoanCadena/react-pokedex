import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Pokemon } from "../interface/Interface";
import PokeInfo from "../components/PokeInfo";
import "../css/PokeStyles.css";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

interface Props {
  page: string;
}

const Details = (props: Props) => {
  const buscadorPokemon = useSelector((state: any) => state.buscadorPokemon);
  const pokemon = buscadorPokemon.pokemon[0];

  const savePokemon = (info: Pokemon) => {
    const pokemonInfo = JSON.stringify(info);
    localStorage.setItem(String(info.id), pokemonInfo);
    alert(info.name + " ha sido correctamente añadido a tu lista");
  };

  const deletePokemon = (info: Pokemon) => {
    localStorage.removeItem(String(info.id));
    alert(info.name + " se ha eliminado correctamente de tu lista");
  };
  return (
    <>
      {buscadorPokemon.loading && (
        <div className="text-warning">Buscando...</div>
      )}
      {buscadorPokemon.pokemon.length >= 1 && (
        <>
          <PokeInfo
            {...pokemon}
            img={
              pokemon.sprites.other.dream_world.front_default !== null
                ? pokemon.sprites.other.dream_world.front_default
                : pokemon.sprites.front_default
            }
          />
          <div className="cont_button">
            {props.page === "/mylist" ? (
              <input
                type="button"
                value="Delete from my list"
                onClick={() => deletePokemon(pokemon)}
                className="button_delete"
              />
            ) : (
              <input
                type="button"
                value="Save in my list"
                onClick={() => savePokemon(pokemon)}
                className="button_add"
              />
            )}
            <Link to={props.page || "/"}>
              <button className="button_back">Get back</button>
            </Link>
          </div>
        </>
      )}
      {buscadorPokemon.error !== "" && (
        <span className="text-danger">{buscadorPokemon.error.mensaje}</span>
      )}
    </>
  );
};

export default Details;
