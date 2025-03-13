import { NavLink } from "react-router";
import PokeBallIcon from "../assets/pokeball.svg";
import styles from "../styles/header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={PokeBallIcon} alt="Pokeball" />
        <span>PokeDex</span>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink
              className={(navData) => {
                return navData.isActive ? styles.active : "";
              }}
              to="/pokedex"
            >
              Pokemons
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => {
                return navData.isActive ? styles.active : "";
              }}
              to="/mylist"
            >
              My list
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
