import React from "react";
import { LoadingContainer } from "./componentsStyles.js";
import Image from "../assets/pokeball.gif";

const Loading = () => (
  <LoadingContainer>
    <img
      src={Image}
      className="loading-bounce"
      style={{ width: "200px", height: "200px", display: "block" }}
      alt="pokeball"
    />
    <h2 style={{ color: "white" }}>Loading...</h2>
  </LoadingContainer>
);

export default Loading;
