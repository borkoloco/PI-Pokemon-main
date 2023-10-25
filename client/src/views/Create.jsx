import { React, useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTypes, postPokemon } from "../redux/actions";
import Validate from "./Validate";
import styled from "styled-components";

const FormContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 5px 0;
`;

const Button = styled.button`
  background-color: #0074d9;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  margin-top: 10px;
`;

const ErrorMessage = styled.p`
  color: red;
`;

const Select = styled.select`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 5px 0;
`;

const TypeTag = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
`;

const DeleteButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

function CreatePoke() {
  const dispatch = useDispatch();
  const Alltypes = useSelector((state) => state.types);

  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    name: "",
    image: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    types: [],
  });

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  function handleInputChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      Validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleSelect(e) {
    if (input.types.length < 2) {
      setInput({
        ...input,
        types: [...input.types, e.target.value],
      });
    } else {
      alert("Choose one or two types for your Pokémon");
    }
  }

  function handleDelete(e) {
    setInput({
      ...input,
      types: input.types.filter((type) => type !== e),
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(postPokemon(input));
    setInput({
      name: "",
      image: "",
      hp: "",
      attack: "",
      defense: "",
      speed: "",
      height: "",
      weight: "",
      types: [],
    });
  }

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <h1>Create Pokémon</h1>
        <Link to="/home">
          <Button>Go Back</Button>
        </Link>
        <FormGroup>
          <Label htmlFor="name">Name : </Label>
          <Input
            type="text"
            name="name"
            value={input.name}
            onChange={handleInputChange}
            className={errors.name}
          />
          {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
        </FormGroup>
        <FormGroup>
          <Label htmlFor="image">Image : </Label>
          <Input
            type="url"
            name="image"
            value={input.image}
            onChange={handleInputChange}
            className={errors.image}
          />
          {errors.image && <ErrorMessage>{errors.image}</ErrorMessage>}
        </FormGroup>
        <FormGroup>
          <Label htmlFor="hp">Health Points : </Label>
          <Input
            type="number"
            name="hp"
            value={input.hp}
            onChange={handleInputChange}
            className={errors.hp}
          />
          {errors.hp && <ErrorMessage>{errors.hp}</ErrorMessage>}
        </FormGroup>
        <FormGroup>
          <Label htmlFor="attack">Attack : </Label>
          <Input
            type="number"
            name="attack"
            value={input.attack}
            onChange={handleInputChange}
            className={errors.attack}
          />
          {errors.attack && <ErrorMessage>{errors.attack}</ErrorMessage>}
        </FormGroup>
        <FormGroup>
          <Label htmlFor="defense">Defense :</Label>
          <Input
            type="number"
            name="defense"
            value={input.defense}
            onChange={handleInputChange}
            className={errors.defense}
          />
          {errors.defense && <ErrorMessage>{errors.defense}</ErrorMessage>}
        </FormGroup>
        <FormGroup>
          <Label htmlFor="speed">Speed : </Label>
          <Input
            type="number"
            name="speed"
            value={input.speed}
            onChange={handleInputChange}
            className={errors.speed}
          />
          {errors.speed && <ErrorMessage>{errors.speed}</ErrorMessage>}
        </FormGroup>
        <FormGroup>
          <Label htmlFor="height">Height : </Label>
          <Input
            type="number"
            name="height"
            value={input.height}
            onChange={handleInputChange}
            className={errors.height}
          />
          {errors.height && <ErrorMessage>{errors.height}</ErrorMessage>}
        </FormGroup>
        <FormGroup>
          <Label htmlFor="weight">Weight : </Label>
          <Input
            type="number"
            name="weight"
            value={input.weight}
            onChange={handleInputChange}
            className={errors.weight}
          />
          {errors.weight && <ErrorMessage>{errors.weight}</ErrorMessage>}
        </FormGroup>
        <br />
        <FormGroup>
          <Label htmlFor="weight">PICK ONLY TWO TYPES</Label>
          <Select name="types" onChange={handleSelect}>
            {Alltypes?.map((type) => {
              return (
                <option key={type.id} value={type.name}>
                  {type.name}
                </option>
              );
            })}
          </Select>
          {input.types.map((e) => {
            return (
              <TypeTag key={e}>
                <DeleteButton onClick={() => handleDelete(e)}>x</DeleteButton>
                <span> {e} </span>
              </TypeTag>
            );
          })}
        </FormGroup>

        <Button type="submit">Create Pokemon</Button>
        <br />
      </Form>
    </FormContainer>
  );
}

export default CreatePoke;
