import styled from "styled-components";

// Card

export const Title2 = styled.h2`
  top: 8px;
  position: absolute;
  align-self: center;
  font-family: "Roboto", sans-serif;
  z-index: 2;
`;

export const Title = styled.h2`
  align-self: center;
  font-family: "Roboto", sans-serif;
`;

export const Flip3D = styled.div`
  width: 290px;
  height: 250px;
  margin: 20px;
  float: left;
  position: relative;
`;

export const Front = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 290px;
  height: 250px;
  position: absolute;
  transform: perspective(600px) rotateX(0deg);
  -webkit-transform: perspective(600px) rotateY(0deg);
  background: #fc0;
  border-radius: 10px;
  backface-visibility: hidden;
  transition: transform 0.6s linear 0s, -webkit-transform 0.6s linear 0s;
  box-shadow: 0 0 30px 0.5px darkslategrey;
  z-index: 1;
`;

export const Back = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 290px;
  height: 250px;
  position: absolute;
  transform: perspective(600px) rotateX(180deg);
  background: orange;
  border-radius: 10px;
  backface-visibility: hidden;
  transition: transform 0.6s linear 0s;
  box-shadow: 0 0 30px 0.5px darkslategrey;
`;

export const Flip3DContainer = styled.div`
  ${Flip3D}:hover ${Front} {
    transform: perspective(600px) rotateX(-180deg);
    box-shadow: 0 0 10px 0.5px darkslategrey;
  }

  ${Flip3D}:hover ${Back} {
    transform: perspective(600px) rotateX(0deg);
    box-shadow: 0 0 10px 0.5px darkslategrey;
  }
`;

//Loading

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
`;

//NavBar

export const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: black;
`;
export const Logo = styled.img`
  height: 80px;
`;

export const Button = styled.button`
  background-color: grey;
  color: white;
  padding: 5px;
  width: 120px;

  @media screen and (max-width: 450px) {
    display: none;
  }
`;

//Pagination
export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ListItem = styled.li`
  display: inline-block;
  justify-content: center;
  margin: 0 2px;
  text-align: center;
`;

export const Button2 = styled.button`
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
