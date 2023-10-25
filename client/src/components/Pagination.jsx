import React from "react";
// import styles from "./Pagination.module.css";
import { List, ListItem, Button2 } from "./componentsStyles";

function Pagination({ Allpokemons, pokemonsPerPage, paginated }) {
  const pageNumber = [];
  for (let i = 0; i < Math.ceil(Allpokemons / pokemonsPerPage); i++) {
    pageNumber.push(i + 1);
  }
  return (
    // <ul className={styles["pagination"]}>

    <List>
      {pageNumber &&
        pageNumber.map((number) => {
          return (
            <ListItem key={number}>
              <Button2 onClick={() => paginated(number)}>{number}</Button2>
            </ListItem>
          );
        })}
    </List>
  );
}

export default Pagination;
