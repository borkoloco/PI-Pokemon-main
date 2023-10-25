import styled, { keyframes } from 'styled-components';

// Global Styles
export const GlobalStyles = styled.div`
  * {
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: arial, sans-serif;
  }
`;

// Background Styles
export const Background = styled.div`
  &.background-normal {
    background-color: #a4acaf;
    color: #212121 !important;
  }

  &.background-dragon {
    background: linear-gradient(180deg, #53a4cf 50%, #f16e57 50%);
    background-color: #53a4cf;
    color: #fff !important;
  }

  &.background-grass {
    background-color: #9bcc50;
    color: #212121 !important;
  }

  &.background-poison {
    background-color: #b97fc9;
    color: #fff !important;
  }

  &.background-fire {
    background-color: #fd7d24;
    color: #fff !important;
  }

  &.background-water {
    background-color: #4592c4;
    color: #fff !important;
  }

  &.background-electric {
    background-color: #eed535;
    color: #212121 !important;
  }

  &.background-bug {
    background-color: #729f3f;
    color: #fff !important;
  }

  &.background-flying {
    background: linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%);
    background-color: #3dc7ef;
    color: #212121 !important;
  }

  &.background-fairy {
    background-color: #fdb9e9;
    color: #212121 !important;
  }

  &.background-psychic {
    background-color: #f366b9;
    color: #fff !important;
  }

  &.background-rock {
    background-color: #a38c21;
    color: #fff !important;
  }

  &.background-ice {
    background-color: #51c4e7;
    color: #212121 !important;
  }

  &.background-ghost {
    background-color: #7b62a3;
    color: #fff !important;
  }

  &.background-steel {
    background-color: #9eb7b8;
    color: #212121 !important;
  }

  &.background-fighting {
    background-color: #d56723;
    color: #fff !important;
  }

  &.background-ground {
    background: linear-gradient(180deg, #f7de3f 50%, #ab9842 50%);
    background-color: #f7de3f;
    color: #212121 !important;
  }
`;

// Header Styles
export const Header = styled.header`
  background-color: #212121;
  color: #fff;
  padding: 0.5rem 1rem;
  text-align: center;
`;

// Keyframes
export const LoadingPageAnimation = keyframes`
  0%, 80% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

// Main Styles
export const Main = styled.main`
  margin-top: 2rem;
  animation: ${LoadingPageAnimation} 2s;
`;

// Pokedex Styles
export const Pokedex = styled.div`
  padding: 1rem;
  display: grid;
  grid-gap: 3rem 2rem;
  grid-template-columns: repeat(auto-fill, 250px);
  justify-content: center;
`;

// Pokedex Control Styles
export const PokedexControl = styled.div`
  margin: 4rem 0 3rem;
  display: grid;
  grid-template-columns: 17rem;
  grid-gap: 0.5rem;
  justify-content: center;

  @media (min-width: 840px) {
    grid-template-columns: repeat(3, 17rem);
  }
`;

// Form Control Styles
export const FormControl = styled.div`
  margin: 0 0.5rem;
  font-size: 1.1rem;
  display: grid;
  grid-template-columns: 3rem minmax(13rem, 15rem);
  grid-gap: 0.5rem;
  align-items: center;
  justify-content: center;

  @media (min-width: 840px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 980px) {
    grid-template-columns: 3rem minmax(13rem, 15rem);
  }
`;

// Filter Name Styles
export const FilterName = styled.input`
  border: none;
  border-bottom: 1px solid #c0c0c0;
  outline: none;
  transition: all 0.2s;

  &:focus {
    border-bottom: 1px solid #000;
  }
`;

// Keyframes
export const PokemonUpAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-0.4rem);
  }
`;

// Pokemon Styles
export const Pokemon = styled.div`
  background-color: #f2f2f2;
  overflow: hidden;
  position: relative;

  &:hover {
    animation: ${PokemonUpAnimation} 0.3s;
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;

// Pokemon Figure Styles
export const PokemonFigure = styled.div`
  text-align: center;
`;

export const PokemonImage = styled.img`
  position: relative;
  z-index: 1;
  transition: transform 0.3s;

  ${Pokemon}:focus & {
    transform: scale(0.6) translate(100px, -80px);
  }
`;

// Pokemon Description Styles
export const PokemonDescription = styled.div`
  background-color: #fff;
  margin: 0 1rem 1rem;
  padding: 0.5rem;
  transition: transform 0.3s;

  ${Pokemon}:focus & {
    transform: translateY(-160px);
  }
`;

export const PokemonID = styled.div`
  color: #919191;
`;

export const PokemonName = styled.div`
  margin: 1rem 0 0.6rem;
  font-size: 1.5rem;
  font-weight: normal;
`;

export const PokemonTypes = styled.div`
  display: flex;
`;

export const PokemonType = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  margin-right: 0.5rem;
  padding: 0.1rem 0.3rem;
  font-size: 0.8rem;
`;

// Pokemon Stats Styles
export const PokemonStats = styled.div`
  position: absolute;
  width: calc(100% - 2rem);
  margin: 0 1rem 1
