const PokeInfo = (props) => {
  return (
    <>
      <div>
        <span>{props.name} </span>
        {props.id < 10 ? <small>N.°00{props.id}</small> : <small>N.°0{props.id}</small>}
      </div>
      <img src={props.image} alt={props.name} />
      <div>
        <div>
          <h4>Height</h4>
          <>{props.height / 10}m</>
        </div>
        <div>
          <h4>Weight</h4>
          <>{props.weight / 10}Kg</>
        </div>
        <div>
          <h4>Base Experience</h4>
          {props.base_experience}
        </div>
        <div>
          <h4>Types</h4>
          {props.types.map((auxType) => {
            return (
              <div key={auxType.type.name}>
                <small>{auxType.type.name}</small>
                <br />
              </div>
            );
          })}
        </div>
        <div>
          <h4>Abilities</h4>
          {props.abilities.map((auxAbility) => {
            return (
              <div key={auxAbility.ability.name}>
                <small>{auxAbility.ability.name}</small>
                <br />
              </div>
            );
          })}
        </div>
        <div>
          <h5>Stats</h5>
          {props.stats.map((auxStat) => {
            return (
              <section key={Math.random()}>
                <h5>{auxStat.stat.name}</h5>
                <small>{auxStat.base_stat}</small>
              </section>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PokeInfo;
