import { FC, useContext } from "react";
import { Pokemon } from "../interface/Interface";
import PokemonData from "../context/pokemon-context";
import "../css/Colors.css";
import "../css/PokeStyles.css";

const PokeInfo= () => {
  const ctx = useContext(PokemonData);
  return (
    <>
      <div className="detail_name">
        <br />
        <span>{ctx.name} N.° </span>
        {ctx.id < 10 ? <span>00{ctx.id}</span> : <span>0{ctx.id}</span>}
      </div>
      <div className="cont_details">
        <img src={ctx.img} alt={ctx.name} className="cont_image" />
        <div className="cont_detail_info">
          <div className="cont_detail_base">
            <div>
              <h2>Height</h2>
              <>{+ctx.height / 10}m</>
            </div>
            <div>
              <h2>Weight</h2>
              <>{+ctx.weight / 10}Kg</>
            </div>
            <div>
              <h2>Base Experience</h2>
              <>{ctx.base_experience}</>
            </div>
          </div>
          <h2>Types</h2>
          <div className="cont_detail_items">
            {ctx.types.map((auxType) => {
              return (
                <div
                  key={auxType.type.name}
                  className={"cont_types " + auxType.type.name}
                >
                  <span>{auxType.type.name}</span>
                  <br />
                </div>
              );
            })}
          </div>
          <h2>Abilities</h2>
          <div className="cont_detail_items">
            {ctx.abilities.map((auxAbility) => {
              return (
                <div key={auxAbility.ability.name}>
                  <span>{auxAbility.ability.name}</span>
                  <br />
                </div>
              );
            })}
          </div>
          <h2>Stats</h2>
          <div className="cont_detail_base">
            {ctx.stats.map((auxStat) => {
              return (
                <section key={Math.random()}>
                  <h3>{auxStat.stat.name}</h3>
                  <span>{auxStat.base_stat}</span>
                </section>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default PokeInfo;
