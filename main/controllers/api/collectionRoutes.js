// const router = require("express").Router();
// const { Collection, Item } = require("../../models");



// // Get One Collection
// router.get("/collections/:id", async (req, res) => {
//   try {
//     const collectionData = await Collection.findByPk(req.params.id);
//     if (!collectionData) {
//       res.status(404).json({ message: "No collection with this id!" });
//       return;
//     }
//     res.status(200).json(collectionData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });
// // Get all collections
// router.get("/collections", async (req, res) => {
//   try {
//     const dbAllCollections = await Collection.findAll({
//       include: [
//         { 
//           model: Item,
//           attributes: [ "name", "description", "date_of_collection"],
//           order: [["user_id", "ASC"]],
//         },
//       ]
//     });
//     const collections = dbAllCollections.map((collection) =>
//       collection.get({ plain: true })
//     );
//     res.render("collection", {
//       collections,
//     });
//     // res.status(200).json(dbAllCollections);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// // Create A New Collection
// router.post("/collections/create", async (req, res) => {
//   try {
//     const dbCollectionData = await Collection.create({
//       name: req.body.name,
//       message: req.body.message,
//       user_id: req.body.user_id,
//     });
//     res.render("collection-create", { 
//       dbCollectionData, 
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });


// // Update A Collection
// router.put("/collections/:id", async (req, res) => {
//   try {
//     const collectionData = await Collection.update(req.body, {
//       where: {
//         id: req.params.id,
//       },
//     });
//     if (!collectionData[0]) {
//       res.status(404).json({ message: "No collection with this id!" });
//       return;
//     }
//     res.status(200).json(collectionData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // Delete A Collection
// router.delete("/collections/:id", async (req, res) => {
//   try {
//     const collectionData = await Collection.destroy({
//       where: {
//         id: req.params.id,
//       },
//     });
//     if (!collectionData) {
//       res.status(404).json({ message: "No collection with this id!" });
//       return;
//     }
//     res.status(200).json(collectionData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// module.exports = router;
