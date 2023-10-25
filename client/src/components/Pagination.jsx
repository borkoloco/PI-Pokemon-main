import React from "react";
// import styles from "./Pagination.module.css";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  display: inline-block;
  justify-content: center;
  margin: 0 2px;
  text-align: center;
`;

const Button = styled.button`
  float: center;
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
`;

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
              <Button onClick={() => paginated(number)}>{number}</Button>
            </ListItem>
          );
        })}
    </List>
  );
}

export default Pagination;
