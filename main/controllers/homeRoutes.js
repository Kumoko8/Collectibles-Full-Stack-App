const router = require("express").Router();

const withAuth = require("../utils/auth");
const { Collection, Item } = require("../models");

router.get("/", async (req, res) => {
  res.render("homepage", { logged_in: req.session.logged_in });
});

// Login route
router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

// Get Collections
router.get("/collections", withAuth, async (req, res) => {
  try {
    const dbCollectionData = await Collection.findAll({
      include: [
        { 
        model: Item,
        attributes: [ "name", "description"],
      },
        ]
      });
    const collections = dbCollectionData.map((collection) =>
      collection.get({plain: true})
    );
    res.render("collection", {
      collections: collections,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
