const router = require("express").Router();

const userRoutes = require("./userRoutes");
const collectionRoutes = require("./collectionRoutes");
const itemRoutes = require("./itemRoutes");
const uploadRoutes = require("./uploadRoutes");
const homeRoutes = require("../homeRoutes");

router.use("/users", userRoutes);
router.use("/items", itemRoutes);
router.use("/collections", collectionRoutes);
router.use("/uploads", uploadRoutes);
router.use("/create", homeRoutes);

module.exports = router;
