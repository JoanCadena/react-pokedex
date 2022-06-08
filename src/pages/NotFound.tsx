import { Link } from "react-router-dom";
import "../css/PokeStyles.css";

const NotFound = () => {
  return (
    <div className={"cont_list no_pokemons"}>
      <h1>Page not found!</h1>
      <Link to="/">
        <button className="button_back" style={{ margin: 0 }}>
          Get back
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
