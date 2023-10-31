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
        ? res.status(200).json(pokeName)
        : res.status(404).json({ error: "Pokemon not found" });
    } else {
      res.status(200).json(pokeAll);
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// pokeRouter.get("/", async (req, res) => {
//   try {
//     const { attack } = req.query;
//     const pokeAll = await getPokes();
//     if (attack) {
//       let pokeAttack = pokeAll.filter((poke) => +poke.attack === +attack);

//       pokeAttack.length
//         ? res.status(200).json(pokeAttack)
//         : res.status(404).json({ error: "Attack not found" });
//     } else {
//       res.status(200).json(pokeAll);
//     }
//   } catch (error) {
//     res.status(404).json({ error: error.message });
//   }
// });

pokeRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const pokeId = await getPokeById(id);
    res.status(200).json(pokeId);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

pokeRouter.post("/", async (req, res) => {
  try {
    const pokeCreated = await createPoke(req.body);
    res.status(201).json(pokeCreated);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = pokeRouter;
