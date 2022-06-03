import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import PokeInfo from "../components/PokeInfo";

const Details = (props) => {
  const params = useParams();
  const [pokemon, setPokemon] = useState();
  const url = `https://pokeapi.co/api/v2/pokemon/${params.pokeId}`;

  const getPokemon = async () => {
    const res = await fetch(url);
    const data = await res.json();

    setPokemon(data);
  };

  const savePokemon = (info) => {
    const pokemonInfo = JSON.stringify(info);
    localStorage.setItem(info.id, pokemonInfo);
    alert(info.name + ' ha sido correctamente añadido a tu lista')
  };

  const deletePokemon = (info) => {
    localStorage.removeItem(info.id);
    alert(info.name + ' se ha eliminado correctamente de tu lista')
  };

  useEffect(() => {
    getPokemon();
  }, []);

  if (pokemon) {
    return (
      <>
        {props.page == "/mylist" ? (
          <input
            type="button"
            value="Eliminar en mi lista"
            onClick={() => deletePokemon(pokemon)}
          />
        ) : (
          <input
            type="button"
            value="Guardar en mi lista"
            onClick={() => savePokemon(pokemon)}
          />
        )}
        <Link to={props.page}>Volver</Link>
        <PokeInfo
          {...pokemon}
          key={Math.random}
          image={pokemon.sprites.other.dream_world.front_default}
        />
      </>
    );
  }
  return <h3>Loading...</h3>;
};

export default Details;
