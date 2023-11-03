// import React from "react";
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   filterAndOrder,
//   getPokemons,
//   // getTypes,
//   // filterPokemonsTypes,
//   // filterPokemonsCreated,
//   // sortPokemonsName,
//   // sortPokemonsAttack,
//   sortPokemons,
// } from "../redux/actions";
// import Card from "../components/Card";
// import NavBar from "../components//NavBar";
// import Pagination from "../components/Pagination";
// import Loading from "../components/Loading";
// import {
//   FilterDiv,
//   PaginationButton,
//   Wrapper,
//   PaginationDiv,
//   CardContainer,
// } from "./viewsStyles.js";

// const Home = () => {
//   const dispatch = useDispatch();
//   const Allpokemons = useSelector((state) => state.pokemons);
//   const types = useSelector((state) => state.types);

//   const [currentPage, setCurrentPage] = useState(1);
//   const [pokemonsPerPage] = useState(12);

//   const indexLastPokemons = currentPage * pokemonsPerPage;
//   const indexFirstPokemons = indexLastPokemons - pokemonsPerPage;
//   const currentPokemons = Allpokemons.slice(
//     indexFirstPokemons,
//     indexLastPokemons
//   );

//   const totalPages = Math.ceil(Allpokemons.length / pokemonsPerPage);

//   const [, setOrder] = useState("");

//   const [typeSelect, setTypeSelect] = useState("All");
//   const [createdSelect, setCreatedSelect] = useState("All");

//   // useEffect(() => {
//   //   console.log("1");
//   //   dispatch(getPokemons());
//   // }, [dispatch]);

//   // useEffect(() => {
//   //   console.log("2");
//   //   dispatch(getTypes());
//   // }, [dispatch]);

//   const reloadHandler = (e) => {
//     e.preventDefault();
//     dispatch(getPokemons());
//   };

//   const paginated = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   // const sortNameHandler = (e) => {
//   //   e.preventDefault();
//   //   dispatch(sortPokemonsName(e.target.value));
//   //   setCurrentPage(1);
//   //   setOrder(`${e.target.value}`);
//   // };

//   // const sortAttackHandler = (e) => {
//   //   e.preventDefault();
//   //   dispatch(sortPokemonsAttack(e.target.value));
//   //   setCurrentPage(1);
//   //   setOrder(`${e.target.value}`);
//   // };

//   const sortHandler = (e) => {
//     e.preventDefault();
//     dispatch(sortPokemons(e.target.value));
//     setCurrentPage(1);
//     setOrder(`${e.target.value}`);
//   };

//   const filterCreatedHandler = (e) => {
//     e.preventDefault();
//     // dispatch(filterAndOrder(typeSelect, createdSelect));
//     setCreatedSelect(e.target.value);

//     // dispatch(filterPokemonsCreated(e.target.value));

//     setCurrentPage(1);
//     setOrder(`${e.target.value}`);
//   };

//   useEffect(() => {
//     console.log("3");
//     dispatch(filterAndOrder(typeSelect, createdSelect));
//   }, [dispatch, typeSelect, createdSelect]);

//   const filterTypeHandler = (e) => {
//     e.preventDefault();
//     // dispatch(filterAndOrder(typeSelect, createdSelect));
//     setTypeSelect(e.target.value);

//     // dispatch(filterPokemonsTypes(e.target.value));
//     setCurrentPage(1);
//     setOrder(` ${e.target.value}`);
//   };

//   const pageChangeHandler = (page) => {
//     setCurrentPage(page);
//   };

//   const goToPreviousPage = () => {
//     if (currentPage > 1) {
//       pageChangeHandler(currentPage - 1);
//     }
//   };

//   const goToNextPage = () => {
//     if (currentPage < totalPages) {
//       pageChangeHandler(currentPage + 1);
//     }
//   };

//   return (
//     <div>
//       <Wrapper>
//         <NavBar />

//         <FilterDiv>
//           {/* <select onChange={(e) => sortNameHandler(e)}>
//             <option>ORDER BY NAME</option>
//             <option value="asc">Ascending order</option>
//             <option value="desc">Descending order</option>
//           </select>

//           <select
//             onChange={(e) => {
//               sortAttackHandler(e);
//             }}
//           >
//             <option>BY STRENGTH</option>
//             <option value="asc">Stronger attack</option>
//             <option value="desc">Weaker attack</option>
//           </select> */}

//           <select onChange={(e) => sortHandler(e)}>
//             <option>SELECT ORDER</option>
//             <option value="nameAsc">Ascending name order</option>
//             <option value="nameDesc">Descending mame order</option>

//             <option value="attAsc">Stronger attack</option>
//             <option value="attDesc">Weaker attack</option>
//           </select>

//           <select
//             onChange={(e) => {
//               filterTypeHandler(e);
//             }}
//           >
//             <option value="All">FILTER BY TYPE</option>
//             {types?.map((e) => (
//               <option value={e.name}>{e.name}</option>
//             ))}
//           </select>

//           <select onChange={(e) => filterCreatedHandler(e)}>
//             <option value="All">FILTER BY ORIGIN</option>
//             <option value="api">Api</option>
//             <option value="created">DB</option>
//           </select>

//           <button
//             onClick={(e) => {
//               reloadHandler(e);
//             }}
//           >
//             Reload Pokemons
//           </button>
//         </FilterDiv>

//         <PaginationDiv>
//           <PaginationButton
//             onClick={goToPreviousPage}
//             disabled={currentPage === 1}
//           >
//             {"<<"}
//           </PaginationButton>
//           <Pagination
//             Allpokemons={Allpokemons.length}
//             pokemonsPerPage={pokemonsPerPage}
//             paginated={paginated}
//           />

//           <PaginationButton
//             onClick={goToNextPage}
//             disabled={currentPage === totalPages}
//           >
//             {">>"}
//           </PaginationButton>
//         </PaginationDiv>

//         <CardContainer>
//           {currentPokemons.length ? (
//             currentPokemons.map((pokemon) => {
//               return (
//                 <div key={pokemon.id}>
//                   <Card
//                     id={pokemon.id}
//                     name={pokemon.name}
//                     image={pokemon.image}
//                     types={pokemon.types.map((p) => `${" " + p.name}`)}
//                     attack={pokemon.attack}
//                   />
//                 </div>
//               );
//             })
//           ) : (
//             <Loading />
//           )}
//         </CardContainer>
//       </Wrapper>
//     </div>
//   );
// };

// export default Home;

// //arreglar lo de la imagen
// //arreglar lo de la bola
// //arreglar el mensaje de error cuando se monta
// //arreglar los select
// // arreglar delay en el sort
// // cuando creo no aparece automaticamente

import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterAndOrder,
  getPokemons,
  // getTypes,
  // filterPokemonsTypes,
  // filterPokemonsCreated,
  // sortPokemonsName,
  // sortPokemonsAttack,
  // sortPokemons,
} from "../redux/actions";
import Card from "../components/Card";
import NavBar from "../components//NavBar";
import Pagination from "../components/Pagination";
import Loading from "../components/Loading";
import {
  FilterDiv,
  // PaginationButton,
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

  // useEffect(() => {
  //   console.log("1");
  //   dispatch(getPokemons());
  // }, [dispatch]);

  // useEffect(() => {
  //   console.log("2");
  //   dispatch(getTypes());
  // }, [dispatch]);

  const reloadHandler = (e) => {
    e.preventDefault();
    dispatch(getPokemons());
  };

  const paginated = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // const sortNameHandler = (e) => {
  //   e.preventDefault();
  //   dispatch(sortPokemonsName(e.target.value));
  //   setCurrentPage(1);
  //   setOrder(`${e.target.value}`);
  // };

  // const sortAttackHandler = (e) => {
  //   e.preventDefault();
  //   dispatch(sortPokemonsAttack(e.target.value));
  //   setCurrentPage(1);
  //   setOrder(`${e.target.value}`);
  // };

  useEffect(() => {
    console.log("3");
    setOrder(!order);
    dispatch(filterAndOrder(sortSelect, typeSelect, createdSelect));
  }, [dispatch, sortSelect, typeSelect, createdSelect]);

  const sortHandler = (e) => {
    e.preventDefault();
    setSortSelect(e.target.value);
    // dispatch(sortPokemons(e.target.value));
    setCurrentPage(1);
    // setOrder(`${e.target.value}`);
  };

  const filterCreatedHandler = (e) => {
    e.preventDefault();
    // dispatch(filterAndOrder(typeSelect, createdSelect));
    setCreatedSelect(e.target.value);

    // dispatch(filterPokemonsCreated(e.target.value));

    setCurrentPage(1);
    // setOrder(`${e.target.value}`);
  };

  const filterTypeHandler = (e) => {
    e.preventDefault();
    // dispatch(filterAndOrder(typeSelect, createdSelect));
    setTypeSelect(e.target.value);

    // dispatch(filterPokemonsTypes(e.target.value));
    setCurrentPage(1);
    // setOrder(` ${e.target.value}`);
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
          {/* <select onChange={(e) => sortNameHandler(e)}>
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
          </select> */}

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
          {/* <PaginationButton
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
          >
            {"<<"}
          </PaginationButton> */}
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

          {/* <PaginationButton
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
          >
            {">>"}
          </PaginationButton> */}
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

//arreglar lo de la imagen
//arreglar lo de la bola
//arreglar el mensaje de error cuando se monta
//arreglar los select
// arreglar delay en el sort
// cuando creo no aparece automaticamente
//ida y vuelta todo se resetea
