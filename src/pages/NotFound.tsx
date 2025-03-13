import { Link } from "react-router";
import styles from "../styles/notFound.module.scss";

const NotFound = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.listContainer}>
        <h1>Page not found!</h1>
        <Link to="/">
          <button className={styles.backButton} style={{ margin: 0 }}>
            Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
