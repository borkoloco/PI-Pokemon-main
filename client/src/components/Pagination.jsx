import React from "react";
import { List, ListItem /*, Button2 */ } from "./componentsStyles.js";

const Pagination = ({
  Allpokemons,
  pokemonsPerPage,
  paginated,
  currentPage,
}) => {
  const pageNumber = [];
  for (let i = 0; i < Math.ceil(Allpokemons / pokemonsPerPage); i++) {
    pageNumber.push(i + 1);
  }
  return (
    <List>
      {pageNumber &&
        pageNumber.map((number) => {
          return (
            <ListItem key={number}>
              <button
                style={{
                  padding: "8px 16px",
                  borderRadius: "8px",
                  color: "black",
                  border: "none",
                }}
                disabled={number === currentPage}
                onClick={() => paginated(number)}
              >
                {number}
              </button>
            </ListItem>
          );
        })}
    </List>
  );
};

export default Pagination;
