import React from "react";
// import styles from "./Search.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonName } from "../redux/actions";

function Search() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handlerInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handlerSubmit(e) {
    e.preventDefault();
    if (name === "") {
      alert("Exact Pokémon Name Required");
    } else {
      dispatch(getPokemonName(name));
    }
    setName("");
  }

  return (
    <form onSubmit={(e) => handlerSubmit(e)}>
      <input
        type="text"
        placeholder="Search pokemon..."
        value={name}
        onChange={(e) => handlerInputChange(e)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default Search;
