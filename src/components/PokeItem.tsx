import { FC, useContext } from "react";
import { Link } from "react-router-dom";
import PokemonData from "../context/pokemon-context";
import "../css/PokeStyles.css";
import "../css/Colors.css";

const PokeItem= () => {
  const ctx = useContext(PokemonData);
  return (
    <Link
      to={`/${ctx.page}/${ctx.id}`}
      className="cont_link"
      style={{ textDecoration: "none" }}
    >
      <div key={ctx.id} className="cont_item">
        <img src={ctx.img} alt={ctx.name} className="cont_img" />
        <div className="cont_number">
          {ctx.id < 10 ? <small>N.°00{ctx.id}</small> : <small>N.°0{ctx.id}</small>}
        </div>
        <h4 className="cont_name">{ctx.name}</h4>
        <div className="cont_info">
          {ctx.types.map((auxType) => {
            return (
              <div key={auxType.type.name} className={"cont_types " + auxType.type.name}>
                <small>{auxType.type.name}</small>
              </div>
            );
          })}
        </div>
      </div>
    </Link>
  );
};

export default PokeItem;
