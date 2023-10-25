import React from "react";
import { Link } from "react-router-dom";
import {
  Title,
  Flip3D,
  Front,
  Back,
  Flip3DContainer,
} from "./componentsStylescom";

function Card({ id, name, image, attack, types }) {
  return (
    <Flip3DContainer>
      <Flip3D>
        <Back>
          <Title>Type</Title>
          <Title>{types}</Title>
          <Title>{`Attack: ${attack}`}</Title>
          <Link to={`/pokemon/${id}`}>
            <Title>Details</Title>
          </Link>
        </Back>

        <Front>
          <img src={image} alt="pokemon" width="190px" heigth="190px" />

          <Title>{name}</Title>
        </Front>
      </Flip3D>
    </Flip3DContainer>
  );
}

export default Card;
