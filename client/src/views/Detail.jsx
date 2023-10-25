import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPokeById } from "../redux/actions";
import { useEffect } from "react";
import pokebolaloading from "../assets/pokeball.gif";

import styled from "styled-components";

const StyledDiv = styled.div`
  text-align: center;
  border: 2px solid #0074d9;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  }

  h1 {
    font-size: 2rem;
    color: #333;
  }

  img {
    width: 200px;
    height: 250px;
    margin: 20px 0;
    border: 2px solid #0074d9;
    border-radius: 10px;
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

    &:hover {
      transform: scale(1.1);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
    }
  }

  h3 {
    font-size: 1.5rem;
  }

  h4 {
    font-size: 1.2rem;
    margin: 5px 0;
  }

  p {
    margin: 10px 0;
  }

  button {
    background-color: #0074d9;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 1.2rem;
    transition: background-color 0.2s ease-in-out, transform 0.2s ease-in-out;

    &:hover {
      background-color: #005ea3;
      transform: scale(1.05);
    }
  }
`;

const LoadingContainer = styled.div`
  text-align: center;

  p {
    font-size: 1.5rem;
    color: #333;
    margin: 20px 0;
  }

  img {
    height: 130px;
    width: 130px;
    margin: 20px 0;
  }
`;

export default function Detail() {
  //const pokemon = useSelector(state => state.data);

  const dispatch = useDispatch();
  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    dispatch(getPokeById(id));
  }, [dispatch, id]);

  const myPokemon = useSelector((state) => state.detail);

  console.log(myPokemon);

  console.log(myPokemon.types);
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
}
