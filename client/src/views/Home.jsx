import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterAndOrder, getPokemons } from "../redux/actions";
import Card from "../components/Card";
import NavBar from "../components//NavBar";
import Pagination from "../components/Pagination";
import Loading from "../components/Loading";
import {
  FilterDiv,
  Wrapper,
  PaginationDiv,
  CardContainer,
} from "./viewsStyles.js";

const Home = () => {
  const dispatch = useDispatch();
  const Allpokemons = useSelector((state) => state.pokemons);
  const types = useSelector((state) => state.types);
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage] = useState(12);

  const indexLastPokemons = currentPage * pokemonsPerPage;
  const indexFirstPokemons = indexLastPokemons - pokemonsPerPage;
  const currentPokemons = Allpokemons.slice(
    indexFirstPokemons,
    indexLastPokemons
  );

  const totalPages = Math.ceil(Allpokemons.length / pokemonsPerPage);

  const [order, setOrder] = useState(true);
  const [typeSelect, setTypeSelect] = useState("All");
  const [createdSelect, setCreatedSelect] = useState("All");
  const [sortSelect, setSortSelect] = useState("nameAsc");

  const reloadHandler = (e) => {
    e.preventDefault();
    dispatch(getPokemons());
  };

  const paginated = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    setOrder(!order);
    dispatch(filterAndOrder(sortSelect, typeSelect, createdSelect));
  }, [dispatch, sortSelect, typeSelect, createdSelect]);

  const sortHandler = (e) => {
    e.preventDefault();
    setSortSelect(e.target.value);
    setCurrentPage(1);
  };

  const filterCreatedHandler = (e) => {
    e.preventDefault();
    setCreatedSelect(e.target.value);
    setCurrentPage(1);
  };

  const filterTypeHandler = (e) => {
    e.preventDefault();
    setTypeSelect(e.target.value);
    setCurrentPage(1);
  };

  const pageChangeHandler = (page) => {
    setCurrentPage(page);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      pageChangeHandler(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      pageChangeHandler(currentPage + 1);
    }
  };

  return (
    <div>
      <Wrapper>
        <NavBar />
        <FilterDiv>
          <select onChange={(e) => sortHandler(e)}>
            <option>SELECT ORDER</option>
            <option value="nameAsc">Ascending name order</option>
            <option value="nameDesc">Descending name order</option>
            <option value="attAsc">Stronger attack</option>
            <option value="attDesc">Weaker attack</option>
          </select>

          <select
            onChange={(e) => {
              filterTypeHandler(e);
            }}
          >
            <option value="All">FILTER BY TYPE</option>
            {types?.map((e) => (
              <option value={e.name}>{e.name}</option>
            ))}
          </select>

          <select onChange={(e) => filterCreatedHandler(e)}>
            <option value="All">FILTER BY ORIGIN</option>
            <option value="api">Api</option>
            <option value="created">DB</option>
          </select>

          <button
            onClick={(e) => {
              reloadHandler(e);
            }}
          >
            Reload Pokemons
          </button>
        </FilterDiv>
        <PaginationDiv>
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            style={{
              marginTop: "16px",
              padding: "10px 15px",
              borderRadius: "8px",
              color: "black",
              border: "none",
              height: "32px",
            }}
          >
            {"<"}
          </button>
          <Pagination
            currentPage={currentPage}
            Allpokemons={Allpokemons.length}
            pokemonsPerPage={pokemonsPerPage}
            paginated={paginated}
          />

          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            style={{
              marginTop: "16px",
              padding: "10px 15px",
              borderRadius: "8px",
              color: "black",
              border: "none",
              height: "32px",
            }}
          >
            {">"}
          </button>
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
                    types={pokemon.types.map((p) => `${" " + p.name}`)}
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
