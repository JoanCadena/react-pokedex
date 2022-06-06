import { Link } from "react-router-dom";
import styles from "../css/PokeStyles.module.css";

const NotFound = () => {
    return (
      <div className={styles.cont_list + ' ' + styles.no_pokemons}>
        <h1>Page not found!</h1>
          <Link to='/'>
            <button className={styles.button_back} style={{margin:0}}>Get back</button>
          </Link>
      </div>
    );
  };
  
  export default NotFound;