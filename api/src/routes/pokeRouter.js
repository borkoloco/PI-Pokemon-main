const { Router } = require("express");
const pokeRouter = Router();
const {
  getPokes,
  createPoke,
  getPokeById,
} = require("./../controllers/pokeController");

pokeRouter.get("/", async (req, res) => {
  try {
    const { name } = req.query;
    const pokeAll = await getPokes();
    if (name) {
      let pokeName = pokeAll.filter(
        (poke) => poke.name.toLowerCase() === name.toLowerCase()
      );
      pokeName.length
        ? res.status(200).send(pokeName)
        : res.status(404).send({ error: "Pokemon not found" });
    } else {
      res.status(200).send(pokeAll);
    }
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});

pokeRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const pokeId = await getPokeById(id);
    res.status(200).send(pokeId);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

pokeRouter.post("/", async (req, res) => {
  try {
    const pokeCreated = await createPoke(req.body);
    res.status(201).json(pokeCreated);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

module.exports = pokeRouter;
