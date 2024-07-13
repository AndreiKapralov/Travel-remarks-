const travelRouter = require("express").Router();
const { Travel } = require("../../db/models");
const cookieParser = require("cookie-parser");

travelRouter.use(cookieParser());

travelRouter.get("/", async (req, res) => {
  const { id } = req.params;
  console.log(req);
  try {
    const result = await Travel.findAll();
    res.json(result);
  } catch ({ message }) {
    res.json(`ошибка: ${message}`);
  }
});

travelRouter.post("/", async (req, res) => {
  try {
    const res = await Travel.create(req.body);
    res.status(201).json(newHistory);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

travelRouter.put("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const { user_id, place, photo, description, location } = req.body;
  try {
    const result = await Travel.update(
      { user_id, place, photo, description, location },
      { where: { id: id } }
    );

    if (result[0] > 0) {
      const result = await Travel.findOne({ where: { id: id } });
      return res.status(200).json({ ok: addHistory });
    }
    res.status(400).json("error");
  } catch ({ message }) {
    res.status(500).json({ error: "Произошла внутренняя ошибка сервера" });
  }
});

travelRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const result = await travelRouter.destroy({ where: { id: +id } });
    console.log(result);
    if (delHistory > 0) {
      return res.status(200).json({ message: "success" });
    }
    res.status(400).json("ошибка");
  } catch ({ message }) {
    res.status(500).send(message);
  }
});

module.exports = travelRouter;
