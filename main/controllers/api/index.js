const router = require("express").Router();

const userRoutes = require("./userRoutes");
const collectionRoutes = require("./collectionRoutes");
const itemRoutes = require("./itemRoutes");
const uploadRoutes = require("./uploadRoutes");

router.use("/users", userRoutes);
router.use("/collections", collectionRoutes);
router.use("/items", itemRoutes);
router.use("/uploads", uploadRoutes);

module.exports = router;
