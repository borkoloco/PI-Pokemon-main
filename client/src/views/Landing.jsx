import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemons, getTypes } from "../redux/actions.js";

import { Link } from "react-router-dom";
import { Video } from "./viewsStyles.js";

const Landing = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("1");
    dispatch(getPokemons());
    dispatch(getTypes());
  }, [dispatch]);

  return (
    <Link to="/home">
      <Video loop autoPlay muted>
        <source src={require("../assets/poke.mp4")} type="video/mp4" />
      </Video>
    </Link>
  );
};

export default Landing;
