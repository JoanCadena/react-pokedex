import { Link } from "react-router-dom";
import styles from "../css/PokeStyles.module.css";
import colors from "../css/Colors.module.css";

const PokeItem = ({ id, image, name, type, page }) => {
  return (
    <Link
      to={`/${page}/${id}`}
      className={styles.cont_link}
      style={{ textDecoration: "none" }}
    >
      <div key={id} className={styles.cont_item}>
        <img src={image} alt={name} className={styles.cont_img} />
        <div className={styles.cont_number}>
          {id < 10 ? <small>N.°00{id}</small> : <small>N.°0{id}</small>}
        </div>
        <h4 className={styles.cont_name}>{name}</h4>
        <div className={styles.cont_info}>
          {type.map((auxType) => {
            return (
              <div
                className={styles.cont_types + " " + colors[auxType]}
                key={auxType}
              >
                <small>{auxType}</small>
              </div>
            );
          })}
        </div>
      </div>
    </Link>
  );
};

export default PokeItem;
