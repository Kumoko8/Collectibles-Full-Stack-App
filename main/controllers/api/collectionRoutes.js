const router = require("express").Router();
const sequelize = require("../../config/connection");

const { Collection } = require("../../models");

// Get all collections
router.get("/", async (req, res) => {
  try {
    const dbAllCollections = await Collection.findAll({
      attributes: {},
      order: [["user_id", "ASC"]],
    });
    res.status(200).json(dbAllCollections);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create A New Collection
router.post("/", async (req, res) => {
  try {
    const dbCollectionData = await Collection.create({
      name: req.body.name,
      message: req.body.message,
      user_id: req.body.user_id,
    });
    res.status(200).json(dbCollectionData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
