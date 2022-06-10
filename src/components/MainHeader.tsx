import { NavLink } from "react-router-dom";
import "../css/MainHeader.css";

const MainHeader = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <NavLink className={ (navData) => {
              return navData.isActive ? "active" : "";
            }} to="/pokedex">
              PokeDex
            </NavLink>
          </li>
          <li>
            <NavLink  className={ (navData) => {
              return navData.isActive ? "active" : "";
            }} to="/mylist">
              MyList
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
