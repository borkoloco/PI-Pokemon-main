import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonName } from "../redux/actions";

const Search = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const inputChangeHandler = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (name === "") {
      alert("Exact Pokémon Name Required");
    } else {
      dispatch(getPokemonName(name));
    }
    setName("");
  };

  return (
    <form onSubmit={(e) => submitHandler(e)}>
      <input
        type="text"
        placeholder="Search pokemon..."
        value={name}
        onChange={(e) => inputChangeHandler(e)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
