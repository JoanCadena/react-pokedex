const PokeItem = ({ id, image, name, type }) => {
  const onClickHandler = () => {
    console.log(id);
  }
  return (
    <div key={id} onClick={onClickHandler}>
      <img src={image} alt={name} />
      <div>{id < 10 ? <small>#00{id}</small> : <small>#0{id}</small>}</div>
      <div>
        <h3>{name}</h3>
        {type.map((auxType) => {
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

export default PokeItem;
