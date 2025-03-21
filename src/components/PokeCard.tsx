import { FC } from "react";
import { Link } from "react-router";
import { IPokemon } from "../interfaces/pokemon";
import styles from "../styles/pokeCard.module.scss";
import "../styles/colors.css";
import HeightIcon from "../assets/height.svg";
import WeightIcon from "../assets/weight.svg";
import fetchPokemon from "../redux/actions/search";
import { useAppDispatch } from "../redux/store";

const PokeCard: FC<IPokemon> = ({
  id,
  img,
  name,
  types,
  height,
  weight,
  page,
}) => {
  const dispatch = useAppDispatch();
  return (
    <Link to={`/${page}/${id}`} className={styles.cardContainer}>
      <div
        key={id}
        className={`${styles.pokemonCard} bgColorHover_${types[0].type.name}`}
        onClick={() => dispatch(fetchPokemon(name))}
      >
        <span className={styles.pokemonBackId}>
          #{id.toString().padStart(3, "0")}
        </span>
        <img src={img} alt={name} className={styles.pokemonImage} />
        <div className={styles.pokemonName}>
          <span className={styles.pokemonNumber}>
            #{id.toString().padStart(3, "0")}
          </span>
          <span style={{ fontSize: "1.5rem" }}>{name}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className={styles.pokemonInfoContainer}>
            {types.map((auxType) => {
              return (
                <div
                  key={auxType.type.name}
                  className={`${styles.pokemonType} ${auxType.type.name}`}
                >
                  <small>{auxType.type.name}</small>
                </div>
              );
            })}
          </div>
          <div className={styles.pokemonInfoContainer}>
            <small className={styles.pokemonStat}>
              <img
                src={HeightIcon}
                alt="height icon"
                className={styles.statIcon}
              />
              {height / 10} m
            </small>
            <small className={styles.pokemonStat}>
              <img
                src={WeightIcon}
                alt="weight icon"
                className={styles.statIcon}
              />
              {weight / 10} kg
            </small>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PokeCard;
