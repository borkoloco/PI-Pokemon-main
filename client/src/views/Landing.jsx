import React from "react";
import { Link } from "react-router-dom";
import { Video } from "./views.js";

const Landing = () => {
  return (
    <Link to="/home">
      <Video loop autoPlay muted>
        <source src={require("../assets/poke.mp4")} type="video/mp4" />
      </Video>
    </Link>
  );
};

export default Landing;
