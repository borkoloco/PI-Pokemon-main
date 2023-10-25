import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTypes, postPokemon } from "../redux/actions";
import Validate from "./Validate";
import {
  FormContainer,
  Form,
  FormGroup,
  Label,
  Input,
  Button3,
  ErrorMessage,
  Select,
  TypeTag,
  DeleteButton,
} from "./viewsStyles.js";

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
          <Button3>Go Back</Button3>
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

        <Button3 type="submit">Create Pokemon</Button3>
        <br />
      </Form>
    </FormContainer>
  );
}

export default CreatePoke;
