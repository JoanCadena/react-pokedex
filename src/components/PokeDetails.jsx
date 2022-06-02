const PokeDetails = () => {
    let pokemon = {
        abilities: ["overgrow", "chlorophyll"],
        base_experience: 64,
        height: 7,
        id: 1,
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
        name: "bulbasaur",
        stats: [
          { name_stat: "hp", base_stat: 45 },
          { name_stat: "attack", base_stat: 49 },
          { name_stat: "defense", base_stat: 49 },
          { name_stat: "special-attack", base_stat: 65 },
          { name_stat: "special-defense", base_stat: 65 },
          { name_stat: "speed", base_stat: 45 },
        ],
        types: ["grass", "poison"],
        weight: 69,
      };
    
  return (
    <div>
      <div>{pokemon.id < 10 ? <small>#00{pokemon.id}</small> : <small>#0{pokemon.id}</small>}</div>
      <img src={pokemon.image} alt={pokemon.name} />
      <div>
        <h3>{pokemon.name}</h3>
        {pokemon.types.map((auxType) => {
          return (
            <div key={auxType}>
              <small>{auxType}</small>
              <br />
            </div>
          );
        })}
        <hr />
      </div>
    </div>
  );
};

export default PokeDetails;