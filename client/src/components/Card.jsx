import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

const Title = styled.h2`
  align-self: center;
  font-family: "Roboto", sans-serif;
`;

const Flip3D = styled.div`
  width: 290px;
  height: 250px;
  margin: 20px;
  float: left;
  position: relative;
`;

const Front = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 290px;
  height: 250px;
  position: absolute;
  transform: perspective(600px) rotateX(0deg);
  -webkit-transform: perspective(600px) rotateY(0deg);
  background: #fc0;
  border-radius: 10px;
  backface-visibility: hidden;
  transition: transform 0.6s linear 0s, -webkit-transform 0.6s linear 0s;
  box-shadow: 0 0 30px 0.5px darkslategrey;
`;

const Back = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 290px;
  height: 250px;
  position: absolute;
  transform: perspective(600px) rotateX(180deg);
  background: orange;
  border-radius: 10px;
  backface-visibility: hidden;
  transition: transform 0.6s linear 0s;
  box-shadow: 0 0 30px 0.5px darkslategrey;
`;

const Flip3DContainer = styled.div`
  ${Flip3D}:hover ${Front} {
    transform: perspective(600px) rotateX(-180deg);
    box-shadow: 0 0 10px 0.5px darkslategrey;
  }

  ${Flip3D}:hover ${Back} {
    transform: perspective(600px) rotateX(0deg);
    box-shadow: 0 0 10px 0.5px darkslategrey;
  }
`;

function Card({ id, name, image, attack, types }) {
  return (
    <Flip3DContainer>
      <Flip3D>
        <Back>
          <Title>{types}</Title>
          <Title>{attack}</Title>
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
