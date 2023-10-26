import React from "react";
import { Link } from "react-router-dom";
import {
  Title,
  Flip3D,
  Front,
  Back,
  Flip3DContainer,
  Title2,
} from "./componentsStyles.js";

const Card = ({ id, name, image, attack, types }) => {
  return (
    <Flip3DContainer>
      <Flip3D>
        <Back>
          <Title>{`Type: ${types}`}</Title>
          <Title>{`Attack: ${attack}`}</Title>
          <Link to={`/pokemon/${id}`}>
            <Title>Details</Title>
          </Link>
        </Back>

        <Front>
          <img src={image} alt="pokemon" width="190px" heigth="190px" />

          <Title2>{name}</Title2>
        </Front>
      </Flip3D>
    </Flip3DContainer>
  );
};

export default Card;
