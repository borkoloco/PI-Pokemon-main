import React from "react";
import { NavLink } from "react-router-dom";
import Search from "./Search";
import styled from "styled-components";
import pokelogo from "../assets/PokeLogo.png";

const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: black;
`;
const Logo = styled.img`
  height: 80px;
`;

const Button = styled.button`
  background-color: grey;
  color: white;
  padding: 5px;
  width: 120px;

  @media screen and (max-width: 450px) {
    display: none;
  }
`;
function Navbar() {
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
}

export default Navbar;
