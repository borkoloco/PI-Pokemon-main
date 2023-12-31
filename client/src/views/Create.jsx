import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTypes, postPokemon, getPokemons } from "../redux/actions";
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
import { useNavigate } from "react-router-dom";

const CreatePokemon = () => {
  const dispatch = useDispatch();
  const Alltypes = useSelector((state) => state.types);
  const navigate = useNavigate();

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

  const inputChangeHandler = (e) => {
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
  };

  const handleSelect = (e) => {
    if (input.types.length < 2) {
      setInput({
        ...input,
        types: [...input.types, e.target.value],
      });
    } else {
      alert("Pick one or two types");
    }
  };

  const deleteHandler = (e) => {
    setInput({
      ...input,
      types: input.types.filter((type) => type !== e),
    });
  };

  const submitHandler = (e) => {
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
    dispatch(getPokemons());
  };

  const clickHandler = () => {
    dispatch(getPokemons());
    navigate(-1);
  };

  return (
    <FormContainer>
      <h1>
        Create Pokemon <Button3 onClick={clickHandler}>Go Back</Button3>
      </h1>

      <Form>
        <FormGroup>
          <Label htmlFor="name">Name : </Label>
          <Input
            type="text"
            name="name"
            value={input.name}
            onChange={inputChangeHandler}
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
            onChange={inputChangeHandler}
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
            onChange={inputChangeHandler}
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
            onChange={inputChangeHandler}
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
            onChange={inputChangeHandler}
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
            onChange={inputChangeHandler}
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
            onChange={inputChangeHandler}
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
            onChange={inputChangeHandler}
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
                <DeleteButton onClick={() => deleteHandler(e)}>x</DeleteButton>
                <span> {e} </span>
              </TypeTag>
            );
          })}
        </FormGroup>

        <Button3 onClick={submitHandler} type="submit">
          Create Pokemon
        </Button3>
        <br />
      </Form>
    </FormContainer>
  );
};

export default CreatePokemon;
