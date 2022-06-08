import { NavLink } from "react-router-dom";
import "../css/MainHeader.css";

const MainHeader = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <NavLink activeClassName="active" to="/pokedex">
              PokeDex
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/mylist">
              MyList
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
