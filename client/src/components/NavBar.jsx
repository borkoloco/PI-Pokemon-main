import React from "react";
import { NavLink } from "react-router-dom";
import Search from "./Search";
import pokelogo from "../assets/PokeLogo.png";
import { Nav, Logo, Button } from "./componentsStyles.js";

const Navbar = () => {
  return (
    <Nav>
      <NavLink to="/" style={{ textDecoration: "none", color: "white" }}>
        Back to Landing
      </NavLink>

      <Logo src={pokelogo} alt="logo.png" />

      <Search />

      <NavLink to="/create">
        <Button>Create</Button>
      </NavLink>
    </Nav>
  );
};

export default Navbar;
