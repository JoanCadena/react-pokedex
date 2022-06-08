import { Link } from "react-router-dom";
import "../css/PokeStyles.css";
import "../css/Colors.css";
import { FC } from "react";
import { Pokemon } from "../interface/Interface";

const PokeItem: FC<Pokemon> = ({ id, img, name, types, page }) => {
  return (
    <Link
      to={`/${page}/${id}`}
      className="cont_link"
      style={{ textDecoration: "none" }}
    >
      <div key={id} className="cont_item">
        <img src={img} alt={name} className="cont_img" />
        <div className="cont_number">
          {id < 10 ? <small>N.°00{id}</small> : <small>N.°0{id}</small>}
        </div>
        <h4 className="cont_name">{name}</h4>
        <div className="cont_info">
          {types.map((auxType) => {
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
