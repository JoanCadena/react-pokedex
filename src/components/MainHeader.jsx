import { NavLink } from "react-router-dom";
import styles from "../css/MainHeader.module.css";

const MainHeader = () => {
  
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={styles.active} to="/pokedex">
              PokeDex
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} to="/mylist">
              MyList
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
