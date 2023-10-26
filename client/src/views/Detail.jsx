import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonById } from "../redux/actions";
import { useEffect } from "react";
import pokebolaloading from "../assets/pokeball.gif";
import { StyledDiv, LoadingContainer } from "./viewsStyles.js";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const myPokemon = useSelector((state) => state.detail);

  useEffect(() => {
    dispatch(getPokemonById(id));
  }, [dispatch, id]);

  return (
    <StyledDiv>
      {myPokemon ? (
        <div>
          <h1>{myPokemon.name}</h1>
          <img src={myPokemon.image} alt="" width="200px" height="250px" />
          <h3>Types: {myPokemon.types?.map((e) => e.name + " ")}</h3>
          <h4>Hp: {myPokemon.hp}</h4>
          <h4>Attack: {myPokemon.attack}</h4>
          <h4>Defense: {myPokemon.defense}</h4>
          <h4>Speed: {myPokemon.speed}</h4>
          <h4>Height: {myPokemon.height}</h4>
          <h4>Weight: {myPokemon.weight}</h4>
        </div>
      ) : (
        <LoadingContainer>
          <p> Loading... </p>
          <img
            src={pokebolaloading}
            alt="pokebolaloading"
            height={130}
            width={130}
          />
        </LoadingContainer>
      )}
      <p>
        <Link to="/home">
          <button>Return</button>
        </Link>
      </p>
    </StyledDiv>
  );
};

export default Detail;
