import { useState } from "react";
import { Link, useNavigate } from "react-router";
import styles from "../styles/search.module.scss";
import SearchIcon from "../assets/search.svg";
import { useAppDispatch } from "../redux/store";
import fetchPokemon from "../redux/actions/search";

export const SearchBar = () => {
  const [search, setSearch] = useState("/pokedex/");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <div className={styles.searchContainer}>
      <input
        id="name"
        placeholder="You're looking for a specific Pokemon?"
        className={styles.searchInput}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            dispatch(fetchPokemon(search));
            navigate("/pokedex/" + search);
          }
        }}
      />
      <Link
        to={"/pokedex/" + search}
        className={styles.searchIconContainer}
        onClick={() => {
          dispatch(fetchPokemon(search));
        }}
      >
        <img src={SearchIcon} alt="search icon" className={styles.searchIcon} />
      </Link>
    </div>
  );
};

export default SearchBar;
