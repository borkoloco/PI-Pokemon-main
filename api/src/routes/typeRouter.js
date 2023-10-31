const { Router } = require("express");
const typeRouter = Router();
const { getTypes } = require("./../controllers/typeController");

typeRouter.get("/", async (req, res) => {
  try {
    const typeDb = await getTypes();
    res.status(200).json(typeDb);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = typeRouter;
