import styled from "styled-components";

//Create
export const FormContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const Label = styled.label`
  font-weight: bold;
`;

export const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 5px 0;
`;

export const Button3 = styled.button`
  background-color: #0074d9;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  margin-top: 10px;
`;

export const ErrorMessage = styled.p`
  color: red;
`;

export const Select = styled.select`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 5px 0;
`;

export const TypeTag = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
`;

export const DeleteButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

//Detail

export const StyledDiv = styled.div`
  text-align: center;
  border: 2px solid #0074d9;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  }

  h1 {
    font-size: 2rem;
    color: #333;
  }

  img {
    width: 200px;
    height: 250px;
    margin: 20px 0;
    border: 2px solid #0074d9;
    border-radius: 10px;
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

    &:hover {
      transform: scale(1.1);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
    }
  }

  h3 {
    font-size: 1.5rem;
  }

  h4 {
    font-size: 1.2rem;
    margin: 5px 0;
  }

  p {
    margin: 10px 0;
  }

  button {
    background-color: #0074d9;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 1.2rem;
    transition: background-color 0.2s ease-in-out, transform 0.2s ease-in-out;

    &:hover {
      background-color: #005ea3;
      transform: scale(1.05);
    }
  }
`;

export const LoadingContainer = styled.div`
  text-align: center;

  p {
    font-size: 1.5rem;
    color: #333;
    margin: 20px 0;
  }

  img {
    height: 130px;
    width: 130px;
    margin: 20px 0;
  }
`;

//Home
export const FilterDiv = styled.div`
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
export const PaginationButton = styled.button`
  float: center;
  margin-top: 16px;
  height: 50%;
  padding: 8px 16px;
  border-radius: 8px;
  color: #fff;
  border: none;
  text-decoration: none;
  background-color: hsl(0, 0%, 8%);
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.3 : 1)};
  transition: opacity 0.2s ease;
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

export const Wrapper = styled.div`
  width: 100%;
  height: 900px;
  margin: 0 auto;
`;

export const PaginationDiv = styled.div`
  justify-content: center;
  display: flex;
`;
export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 98vw;
  justify-content: center;
`;

//Landing
export const Video = styled.video`
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
`;
