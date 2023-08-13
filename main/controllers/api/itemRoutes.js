const router = require("express").Router();
const sequelize = require("../../config/connection");

const { Item } = require("../../models");

// Get all items
router.get("/", async (req, res) => {
  try {
    const dbAllItems = await Item.findAll({
      attributes: {},
      order: [["collection_id", "ASC"]],
    });
    res.status(200).json(dbAllItems);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create A New Item
router.post("/", async (req, res) => {
  try {
    const dbItemData = await Item.create({
      name: req.body.name,
      description: req.body.description,
      message: req.body.message,
      collection_id: req.body.collection_id,
      date_of_collection: req.body.date_of_collection,
    });
    res.status(200).json(dbItemData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
