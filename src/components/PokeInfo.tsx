import React, { FC } from "react";
import { IPokemon } from "../interfaces/pokemon";
import styles from "../styles/pokeInfo.module.scss";
import "../styles/colors.css";
import BackIcon from "../assets/back-to-home.svg";
import { Link } from "react-router";
import HeightIcon from "../assets/height.svg";
import WeightIcon from "../assets/weight.svg";
import PokeBallBlackIcon from "../assets/pokeball_black.svg";
import { BaseStats } from "../utils/enums";

const PokeInfo: FC<IPokemon> = (props) => {
  return (
    <>
      <section className={styles.pokemonNameContainer}>
        <Link
          to={props.page || "/"}
          style={{ display: "flex", alignItems: "center" }}
        >
          <img src={BackIcon} alt="search icon" />
        </Link>
        <span className={styles.pokemonName}>{props.name}</span>
        <span className={styles.pokemonNumber}>
          #{props.id.toString().padStart(3, "0")}
        </span>
      </section>
      <section className={styles.pokemonDetails}>
        <img src={props.img} alt={props.name} className={styles.pokemonImage} />
        <section className={styles.pokemonInfo}>
          <div className={styles.pokemonTypesContainer}>
            {props.types.map((auxType) => {
              return (
                <div
                  key={auxType.type.name}
                  className={`${styles.pokemonTypes} ${auxType.type.name}`}
                >
                  <span>{auxType.type.name}</span>
                  <br />
                </div>
              );
            })}
          </div>
          <span
            className={`${styles.subtitle} color_${props.types[0].type.name}`}
          >
            About
          </span>
          <div className={styles.pokemonStatsContainer}>
            <span className={styles.pokemonStat}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={WeightIcon}
                  alt="Weight icon"
                  className={styles.statIcon}
                />
                {props.weight / 10} kg
              </div>
              <small className={styles.pokemonStatDescription}>Weight</small>
            </span>
            <span className={styles.separator}></span>
            <span className={styles.pokemonStat}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={HeightIcon}
                  alt="Height icon"
                  className={styles.statIcon}
                />
                {props.height / 10} m
              </div>
              <small className={styles.pokemonStatDescription}>Height</small>
            </span>
            <span className={styles.separator}></span>
            <span className={styles.pokemonStat}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={PokeBallBlackIcon}
                  alt="pokeball icon"
                  className={styles.statIcon}
                  height={16}
                />
                {props.base_experience}
              </div>
              <small className={styles.pokemonStatDescription}>Base XP</small>
            </span>
          </div>
          <span
            className={`${styles.subtitle} color_${props.types[0].type.name}`}
          >
            Abilities
          </span>
          <div className={styles.pokemonAbilities}>
            {props.abilities.map((auxAbility) => {
              return (
                <div key={auxAbility.ability.name}>
                  <span>{auxAbility.ability.name}</span>
                </div>
              );
            })}
          </div>
          <span
            className={`${styles.subtitle} color_${props.types[0].type.name}`}
          >
            Base Stats
          </span>
          <div className={styles.pokemonBaseStatsContainer}>
            {props.stats.map((auxStat) => {
              return (
                <div key={auxStat.stat.name} className={styles.pokemonBaseStat}>
                  <h3
                    className={`${styles.baseStatName} color_${props.types[0].type.name}`}
                  >
                    {BaseStats[auxStat.stat.name as keyof typeof BaseStats]}
                  </h3>
                  <span className={styles.smallSeparator}></span>
                  <span style={{ marginRight: "0.75rem" }}>
                    {auxStat.base_stat.toString().padStart(3, "0")}
                  </span>
                  <span className={styles.baseStatValue}>
                    <span
                      className={props.types[0].type.name}
                      style={{
                        display: "flex",
                        height: "0.5rem",
                        width: `${(auxStat.base_stat / 255) * 100}%`,
                        borderRadius: "100vmax",
                      }}
                    ></span>
                  </span>
                </div>
              );
            })}
          </div>
        </section>
      </section>
    </>
  );
};

export default PokeInfo;
