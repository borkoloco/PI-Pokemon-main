import React from "react";
import styled from "styled-components";
// import styles from "./Home.module.css";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPokemons,
  getTypes,
  filterPokemonsTypes,
  filterPokemonsCreated,
  sortPokemonsName,
  sortPokemonsAttack,
} from "../redux/actions";

import Card from "../components/Card";
import NavBar from "../components//NavBar";
import Pagination from "../components/Pagination";
import Loading from "../components/Loading";

const FilterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: grey;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;

  select {
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-right: 10px;
  }

  button {
    background-color: #0074d9;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
  }
`;

//botones de paginacion
const PaginationButton = styled.button`
  float: center;
  margin-top: 16px;
  height: 50%;
  padding: 8px 16px;
  border-radius: 8px;
  color: #fff;
  border: none;
  text-decoration: none;
  background-color: hsl(0, 0%, 8%);
  &.active {
    border-radius: 5px;
    transition: background-color 0.3s;
  }
  &:hover:not(.active) {
    background-color: hsl(0, 0%, 8%);
    color: #fff;
    font-size: 15px;
  }
  /* background: transparent;
  border: none;
  cursor: pointer;
  transition: background-color 0.5s, color 0.5s;
  &:hover {
    background-color: #ff9800;
    color: white;
  } */
`;

const Wrapper = styled.div`
  width: 100%;
  height: 900px;
  margin: 0 auto;
  /* background-color: lightgrey;  */
`;

const PaginationDiv = styled.div`
  justify-content: center;
  display: flex;
`;
const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 98vw;
  justify-content: center;
`;

// const FilterDiv = styled.div`
//   display: flex;
// `;

const Home = () => {
  const dispatch = useDispatch();
  const Allpokemons = useSelector((state) => state.pokemons);
  const types = useSelector((state) => state.types);

  /*paginado */
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage] = useState(12);

  const indexLastPokemons = currentPage * pokemonsPerPage; //12
  const indexFirstPokemons = indexLastPokemons - pokemonsPerPage; //0
  const currentPokemons = Allpokemons.slice(
    indexFirstPokemons,
    indexLastPokemons
  );

  const totalPages = Math.ceil(Allpokemons.length / pokemonsPerPage);

  const [, /*order*/ setOrder] = useState("");

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  function handleClick(e) {
    e.preventDefault();
    dispatch(getPokemons());
  }

  /* Resetea todos los pokemones */
  // function handlerReset(e) {
  //   e.preventDefault();
  //   setCurrentPage(1);
  //   dispatch(getPokemons());
  // }

  /* Paginado */
  const paginated = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  function handleSort(e) {
    e.preventDefault();
    dispatch(sortPokemonsName(e.target.value));
    setCurrentPage(1);
    setOrder(`Ordenado ${e.target.value}`);
  }

  function handleFilterCreated(e) {
    dispatch(filterPokemonsCreated(e.target.value));
  }

  function handleSortAttack(e) {
    e.preventDefault();
    dispatch(sortPokemonsAttack(e.target.value));
    setCurrentPage(1);
    setOrder(`Ordenado ${e.target.value}`);
  }

  function handleFilterType(e) {
    e.preventDefault();
    dispatch(filterPokemonsTypes(e.target.value));
    setCurrentPage(1);
    setOrder(` ${e.target.value}`);
  }

  // Función para cambiar la página actual
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  // Función para ir a la página anterior
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  // Función para ir a la página siguiente
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  return (
    <div>
      <Wrapper>
        <NavBar />

        <FilterDiv>
          <select onChange={(e) => handleSort(e)}>
            <option>ORDER BY NAME</option>
            <option value="asc">Ascending order</option>
            <option value="desc">Descending order</option>
          </select>

          <select
            onChange={(e) => {
              handleSortAttack(e);
            }}
          >
            <option>BY STRENGTH</option>
            <option value="asc">Stronger attack</option>
            <option value="desc">Weaker attack</option>
          </select>

          <select
            onChange={(e) => {
              handleFilterType(e);
            }}
          >
            <option value="All">BY TYPE</option>
            {types?.map((e) => (
              <option value={e.name}>{e.name}</option>
            ))}
          </select>

          <select onChange={(e) => handleFilterCreated(e)}>
            <option>BY CREATOR</option>
            <option value="all">Show all...</option>
            <option value="api">Api</option>
            <option value="created">DB</option>
          </select>

          <button
            onClick={(e) => {
              handleClick(e);
            }}
          >
            Reload Pokemons
          </button>
        </FilterDiv>

        <PaginationDiv>
          <PaginationButton
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
          >
            {"<<"}
          </PaginationButton>
          <Pagination
            Allpokemons={Allpokemons.length}
            pokemonsPerPage={pokemonsPerPage}
            paginated={paginated}
          />
          <PaginationButton
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
          >
            {">>"}
          </PaginationButton>
        </PaginationDiv>
        <CardContainer>
          {currentPokemons.length ? (
            currentPokemons.map((pokemon) => {
              return (
                <div key={pokemon.id}>
                  <Card
                    id={pokemon.id}
                    name={pokemon.name}
                    image={pokemon.image}
                    types={pokemon.types.map((p) => `${p.name + " "}`)}
                    attack={pokemon.attack}
                  />
                </div>
              );
            })
          ) : (
            <Loading />
          )}
        </CardContainer>
      </Wrapper>
    </div>
  );
};

export default Home;

/*
<div class="wrapper">
<div class="title"></div>
<div class="flip3D">
  <div class="back">
    <h2>Back</h2>
  </div>
  <div class="front">
    <h2>Front</h2>
  </div>
</div>
<div class="flip3D">
  <div class="back">
    <h2>Back</h2>
  </div>
  <div class="front">
    <h2>Front</h2>
  </div>
</div>
<div class="flip3D">
  <div class="back">
    <h2>Back</h2>
  </div>
  <div class="front">
    <h2>Front</h2>
  </div>
</div>
<div class="flip3D">
  <div class="back">
    <h2>Back</h2>
  </div>
  <div class="front">
    <h2>Front</h2>
  </div>
</div>
<div class="flip3D">
  <div class="back">
    <h2>Back</h2>
  </div>
  <div class="front">
    <h2>Front</h2>
  </div>
</div>
<div class="flip3D">
  <div class="back">
    <h2>Back</h2>
  </div>
  <div class="front">
    <h2>Front</h2>
  </div>
</div>
<div class="flip3D">
  <div class="back">
    <h2>Back</h2>
  </div>
  <div class="front">
    <h2>Front</h2>
  </div>
</div>
<div class="flip3D">
  <div class="back">
    <h2>Back</h2>
  </div>
  <div class="front">
    <h2>Front</h2>
  </div>
</div>
</div>
*/
