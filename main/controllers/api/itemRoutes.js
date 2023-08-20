// const router = require("express").Router();
// const sequelize = require("../../config/connection");

// const { Item } = require("../../models");

// // Get all items
// router.get("/item/:id", async (req, res) => {
//   try {
//     const dbAllItems = await Item.findByPk({
//       attributes: ["name", "description", "date_of_collection"],
//       order: [["collection_id", "ASC"]],
//     });
//     res.status(200).json(dbAllItems);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // Create A New Item
// router.post("/item", async (req, res) => {
//   try {
//     const dbItemData = await Item.create({
//       name: req.body.name,
//       description: req.body.description,
//       filename: req.body.filename,
//       date_of_collection: req.body.date_of_collection,
//       collection_id: req.body.collection_id,
//     });
//     res.status(200).json(dbItemData);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// module.exports = router;
