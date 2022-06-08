import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import PokeInfo from "../components/PokeInfo";
import { Pokemon } from "../interface/Interface";
import "../css/PokeStyles.css";

interface Props {
  page: string;
}

const Details = (props : Props) => {
  const params = useParams<{ pokeId: string }>();
  const [pokemon, setPokemon] = useState<Pokemon>();
  const url = `https://pokeapi.co/api/v2/pokemon/${params.pokeId}`;

  const getPokemon = async () => {
    const res = await fetch(url);
    const data = await res.json();

    setPokemon(data);
  };

  const savePokemon = (info: Pokemon) => {
    const pokemonInfo = JSON.stringify(info);
    localStorage.setItem(String(info.id), pokemonInfo);
    alert(info.name + " ha sido correctamente añadido a tu lista");
  };

  const deletePokemon = (info: Pokemon) => {
    localStorage.removeItem(String(info.id));
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
    );
  }
  return <h3>Loading...</h3>;
};

export default Details;
