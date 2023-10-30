import React from "react";
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
import {
  FilterDiv,
  PaginationButton,
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

  const [, /*order*/ setOrder] = useState("");

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  const clickHandler = (e) => {
    e.preventDefault();
    dispatch(getPokemons());
  };

  const paginated = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const sortHandler = (e) => {
    e.preventDefault();
    dispatch(sortPokemonsName(e.target.value));
    setCurrentPage(1);
    setOrder(`${e.target.value}`);
  };

  const filterCreatedHandler = (e) => {
    e.preventDefault();
    dispatch(filterPokemonsCreated(e.target.value));
    setCurrentPage(1);
    setOrder(`${e.target.value}`);
  };

  const sortAttackHandler = (e) => {
    e.preventDefault();
    dispatch(sortPokemonsAttack(e.target.value));
    setCurrentPage(1);
    setOrder(`${e.target.value}`);
  };

  const filterTypeHandler = (e) => {
    e.preventDefault();
    dispatch(filterPokemonsTypes(e.target.value));
    setCurrentPage(1);
    setOrder(` ${e.target.value}`);
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
            <option>ORDER BY NAME</option>
            <option value="asc">Ascending order</option>
            <option value="desc">Descending order</option>
          </select>

          <select
            onChange={(e) => {
              sortAttackHandler(e);
            }}
          >
            <option>BY STRENGTH</option>
            <option value="asc">Stronger attack</option>
            <option value="desc">Weaker attack</option>
          </select>

          <select
            onChange={(e) => {
              filterTypeHandler(e);
            }}
          >
            <option value="All">BY TYPE</option>
            {types?.map((e) => (
              <option value={e.name}>{e.name}</option>
            ))}
          </select>

          <select onChange={(e) => filterCreatedHandler(e)}>
            <option value="All">BY CREATOR</option>
            <option value="api">Api</option>
            <option value="created">DB</option>
          </select>

          <button
            onClick={(e) => {
              clickHandler(e);
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
