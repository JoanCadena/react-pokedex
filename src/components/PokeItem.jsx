import { Link } from "react-router-dom";

const PokeItem = ({ id, image, name, type, page }) => {
  return (
    <Link to={`/${page}/${id}`} style={{ textDecoration: 'none', color:"inherit" }}>
      <div key={id}>
        <img src={image} alt={name} />
        <div>{id < 10 ? <small>#00{id}</small> : <small>#0{id}</small>}</div>
        <div>
          <h3>{name}</h3>
          {type.map((auxType) => {
            return (
              <div key={auxType}>
                <small>{auxType}</small>
                <br />
              </div>
            );
          })}
          <hr />
        </div>
      </div>
    </Link>
  );
};

export default PokeItem;
