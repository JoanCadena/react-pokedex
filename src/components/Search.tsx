import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router";
import styles from "../styles/search.module.scss";
import SearchIcon from "../assets/search.svg";

export const Search = () => {
  const [search, setSearch] = useState("/pokedex/");
  const navigate = useNavigate();

  const onChangeHandler = (data: ChangeEvent<HTMLInputElement>) => {
    setSearch("/pokedex/" + data.target.value);
  };

  return (
    <div className={styles.searchContainer}>
      <input
        id="name"
        placeholder="You're looking for a specific Pokemon?"
        className={styles.searchInput}
        onChange={onChangeHandler}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            navigate(search);
          }
        }}
      />
      <Link to={search} className={styles.searchIconContainer}>
        <img src={SearchIcon} alt="search icon" className={styles.searchIcon} />
      </Link>
    </div>
  );
};

export default Search;
