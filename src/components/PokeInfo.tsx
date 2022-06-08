import "../css/PokeStyles.css";
import "../css/Colors.css";
import { FC } from "react";
import { Pokemon } from "../interface/Interface";

const PokeInfo: FC<Pokemon> = (props) => {
  return (
    <>
      <div className="detail_name">
        <br />
        <span>{props.name} N.° </span>
        {props.id < 10 ? <span>00{props.id}</span> : <span>0{props.id}</span>}
      </div>
      <div className="cont_details">
        <img src={props.img} alt={props.name} className="cont_image" />
        <div className="cont_detail_info">
          <div className="cont_detail_base">
            <div>
              <h2>Height</h2>
              <>{+props.height / 10}m</>
            </div>
            <div>
              <h2>Weight</h2>
              <>{+props.weight / 10}Kg</>
            </div>
            <div>
              <h2>Base Experience</h2>
              <>{props.base_experience}</>
            </div>
          </div>
          <h2>Types</h2>
          <div className="cont_detail_items">
            {props.types.map((auxType) => {
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
            {props.abilities.map((auxAbility) => {
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
            {props.stats.map((auxStat) => {
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
