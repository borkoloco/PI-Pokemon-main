const axios = require("axios");
const { Pokemon, Type } = require("./../db");

const getPokeApi = async () => {
  let apiUrl = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151");
  const apiInfo = apiUrl.data.results.map((ele) => axios.get(ele.url));
  let pokeInfo = await axios.all(apiInfo).then((response) =>
    response.map((poke) => {
      return {
        id: poke.data.id,
        name: poke.data.name,
        image: poke.data.sprites.other.home.front_default,
        types: poke.data.types.map((ele) => {
          return { name: ele.type.name };
        }),
        attack: poke.data.stats[1].base_stat,
      };
    })
  );
  return pokeInfo;
};

const getPokeDB = async () => {
  const pokeDb = await Pokemon.findAll({
    attributes: ["id", "name", "image", "attack"],
    include: {
      model: Type,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
  return pokeDb;
};

const getPokes = async () => {
  let api = await getPokeApi();
  let DB = await getPokeDB();
  return [...api, ...DB];
};

const getPokeById = async (id) => {
  const regex = /([a-zA-Z]+([0-9]+[a-zA-Z]+)+)/;
  if (regex.test(id)) {
    let pokeDb = await Pokemon.findOne({
      where: {
        id: id,
      },
      include: {
        model: Type,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });
    return pokeDb;
  } else {
    const pokeApiId = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${id}`
    );
    const pokeId = pokeApiId.data;
    let pokemon = {
      id: pokeId.id,
      name: pokeId.name,
      hp: pokeId.stats[0].base_stat,
      attack: pokeId.stats[1].base_stat,
      defense: pokeId.stats[2].base_stat,
      speed: pokeId.stats[5].base_stat,
      height: pokeId.height,
      weight: pokeId.weight,
      image: pokeId.sprites.other.home.front_default,
      types: pokeId.types.map((type) => {
        return { name: type.type.name };
      }),
    };
    return pokemon;
  }
};

const createPoke = async ({
  name,
  hp,
  attack,
  defense,
  speed,
  height,
  weight,
  image,
  types,
}) => {
  if (
    !name ||
    !hp ||
    !attack ||
    !defense ||
    !speed ||
    !height ||
    !weight ||
    !image ||
    !types
  ) {
    throw Error("Sending incomplete information!");
  } else {
    const create = await Pokemon.create({
      name,
      hp,
      attack,
      defense,
      speed,
      height,
      weight,
      image,
    });
    let typeDb = await Type.findAll({
      where: { name: types },
    });
    await create.addType(typeDb);
    return { message: "Pokémon created successfully", create };
  }
};

module.exports = { getPokes, createPoke, getPokeById };
