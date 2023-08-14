const router = require("express").Router();

const withAuth = require("../utils/auth");
const { User, Collection, Item } = require("../models");

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
router.get("/collection/:id", withAuth, async (req, res) => {
  try {
    //TODO: add "include Items"
    const dbCollectionData = await Collection.findByPk(req.params.id);
    // const collections = dbCollectionData.get({ plain: true });

    const collections = dbCollectionData;
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
