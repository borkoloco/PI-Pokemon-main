import styled, { keyframes } from "styled-components";

// Card

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

//Search

// // Global Styles
// export const GlobalStyles = styled.div`
//   * {
//     margin: 0;
//     box-sizing: border-box;
//   }

//   body {
//     font-family: arial, sans-serif;
//   }
// `;

// // Background Styles
// export const Background = styled.div`
//   &.background-normal {
//     background-color: #a4acaf;
//     color: #212121 !important;
//   }

//   &.background-dragon {
//     background: linear-gradient(180deg, #53a4cf 50%, #f16e57 50%);
//     background-color: #53a4cf;
//     color: #fff !important;
//   }

//   &.background-grass {
//     background-color: #9bcc50;
//     color: #212121 !important;
//   }

//   &.background-poison {
//     background-color: #b97fc9;
//     color: #fff !important;
//   }

//   &.background-fire {
//     background-color: #fd7d24;
//     color: #fff !important;
//   }

//   &.background-water {
//     background-color: #4592c4;
//     color: #fff !important;
//   }

//   &.background-electric {
//     background-color: #eed535;
//     color: #212121 !important;
//   }

//   &.background-bug {
//     background-color: #729f3f;
//     color: #fff !important;
//   }

//   &.background-flying {
//     background: linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%);
//     background-color: #3dc7ef;
//     color: #212121 !important;
//   }

//   &.background-fairy {
//     background-color: #fdb9e9;
//     color: #212121 !important;
//   }

//   &.background-psychic {
//     background-color: #f366b9;
//     color: #fff !important;
//   }

//   &.background-rock {
//     background-color: #a38c21;
//     color: #fff !important;
//   }

//   &.background-ice {
//     background-color: #51c4e7;
//     color: #212121 !important;
//   }

//   &.background-ghost {
//     background-color: #7b62a3;
//     color: #fff !important;
//   }

//   &.background-steel {
//     background-color: #9eb7b8;
//     color: #212121 !important;
//   }

//   &.background-fighting {
//     background-color: #d56723;
//     color: #fff !important;
//   }

//   &.background-ground {
//     background: linear-gradient(180deg, #f7de3f 50%, #ab9842 50%);
//     background-color: #f7de3f;
//     color: #212121 !important;
//   }
// `;

// // Header Styles
// export const Header = styled.header`
//   background-color: #212121;
//   color: #fff;
//   padding: 0.5rem 1rem;
//   text-align: center;
// `;

// // Keyframes
// export const LoadingPageAnimation = keyframes`
//   0%, 80% {
//     opacity: 0;
//   }
//   100% {
//     opacity: 1;
//   }
// `;

// // Main Styles
// export const Main = styled.main`
//   margin-top: 2rem;
//   animation: ${LoadingPageAnimation} 2s;
// `;

// // Pokedex Styles
// export const Pokedex = styled.div`
//   padding: 1rem;
//   display: grid;
//   grid-gap: 3rem 2rem;
//   grid-template-columns: repeat(auto-fill, 250px);
//   justify-content: center;
// `;

// // Pokedex Control Styles
// export const PokedexControl = styled.div`
//   margin: 4rem 0 3rem;
//   display: grid;
//   grid-template-columns: 17rem;
//   grid-gap: 0.5rem;
//   justify-content: center;

//   @media (min-width: 840px) {
//     grid-template-columns: repeat(3, 17rem);
//   }
// `;

// // Form Control Styles
// export const FormControl = styled.div`
//   margin: 0 0.5rem;
//   font-size: 1.1rem;
//   display: grid;
//   grid-template-columns: 3rem minmax(13rem, 15rem);
//   grid-gap: 0.5rem;
//   align-items: center;
//   justify-content: center;

//   @media (min-width: 840px) {
//     grid-template-columns: 1fr;
//   }

//   @media (min-width: 980px) {
//     grid-template-columns: 3rem minmax(13rem, 15rem);
//   }
// `;

// // Filter Name Styles
// export const FilterName = styled.input`
//   border: none;
//   border-bottom: 1px solid #c0c0c0;
//   outline: none;
//   transition: all 0.2s;

//   &:focus {
//     border-bottom: 1px solid #000;
//   }
// `;

// // Keyframes
// export const PokemonUpAnimation = keyframes`
//   0%, 100% {
//     transform: translateY(0);
//   }
//   50% {
//     transform: translateY(-0.4rem);
//   }
// `;

// // Pokemon Styles
// export const Pokemon = styled.div`
//   background-color: #f2f2f2;
//   overflow: hidden;
//   position: relative;

//   &:hover {
//     animation: ${PokemonUpAnimation} 0.3s;
//     cursor: pointer;
//   }

//   &:focus {
//     outline: none;
//   }
// `;

// // Pokemon Figure Styles
// export const PokemonFigure = styled.div`
//   text-align: center;
// `;

// export const PokemonImage = styled.img`
//   position: relative;
//   z-index: 1;
//   transition: transform 0.3s;

//   ${Pokemon}:focus & {
//     transform: scale(0.6) translate(100px, -80px);
//   }
// `;

// // Pokemon Description Styles
// export const PokemonDescription = styled.div`
//   background-color: #fff;
//   margin: 0 1rem 1rem;
//   padding: 0.5rem;
//   transition: transform 0.3s;

//   ${Pokemon}:focus & {
//     transform: translateY(-160px);
//   }
// `;

// export const PokemonID = styled.div`
//   color: #919191;
// `;

// export const PokemonName = styled.div`
//   margin: 1rem 0 0.6rem;
//   font-size: 1.5rem;
//   font-weight: normal;
// `;

// export const PokemonTypes = styled.div`
//   display: flex;
// `;

// export const PokemonType = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 5rem;
//   margin-right: 0.5rem;
//   padding: 0.1rem 0.3rem;
//   font-size: 0.8rem;
// `;

// // Pokemon Stats Styles
// export const PokemonStats = styled.div`
//   position: absolute;
//   width: calc(100% - 2rem);
//   margin: 0 1rem 1
