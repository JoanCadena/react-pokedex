import styles from "../css/PokeStyles.module.css";
import colors from "../css/Colors.module.css";

const PokeInfo = (props) => {
  return (
    <>
      <div className={styles.detail_name}>
        <br />
        <span>{props.name} N.° </span>
        {props.id < 10 ? <span>00{props.id}</span> : <span>0{props.id}</span>}
      </div>
      <div className={styles.cont_details}>
        <img src={props.image} alt={props.name} className={styles.cont_image} />
        <div className={styles.cont_detail_info}>
          <div className={styles.cont_detail_base}>
            <div>
              <h2>Height</h2>
              <>{props.height / 10}m</>
            </div>
            <div>
              <h2>Weight</h2>
              <>{props.weight / 10}Kg</>
            </div>
            <div>
              <h2>Base Experience</h2>
              <>{props.base_experience}</>
            </div>
          </div>
          <h2>Types</h2>
          <div className={styles.cont_detail_items}>
            {props.types.map((auxType) => {
              return (
                <div
                  key={auxType.type.name}
                  className={
                    styles.cont_types + " " + colors[auxType.type.name]
                  }
                >
                  <span>{auxType.type.name}</span>
                  <br />
                </div>
              );
            })}
          </div>
          <h2>Abilities</h2>
          <div className={styles.cont_detail_items}>
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
          <div  className={styles.cont_detail_base}>
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
