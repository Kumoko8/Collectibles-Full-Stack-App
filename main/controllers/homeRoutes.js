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
        attributes: [ "name", "description", "date_of_collection"],
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
router.get('/collections/:id', withAuth, async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  
    // If the user is logged in, allow them to view the gallery
    try {
      const dbCollectionData = await Collection.findByPk(req.params.id, {
        include: [
          {
            model: Item,
            attributes: ["name", "description", "date_of_collection"]
          },
        ],
      });
      const collection = dbCollectionData.get({ plain: true });
      res.render('collection-details', { collection, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
);
router.get("/item/:id", async (req, res) => {
  try {
    const dbAllItems = await Item.findByPk({
      attributes: ["name", "description", "date_of_collection"],
      order: [["collection_id", "ASC"]],
    });
    // res.status(200).json(dbAllItems);
    const item = dbAllItems.get({ plain: true });
    res.render('item-details', { item, loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/create", (req, res) => {
    res.render("collection-create", {logged_in: req.session.logged_in }
    );
});

router.post("/create", async (req, res) => {
  try {
    const dbCollectionData = await Collection.create({
      name: req.body.name,
      message: req.body.message,
      user_id: req.body.user_id,
    });
    
    
    res.render("collection-create", { 
      dbCollectionData, 
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// Login route
router.get("/upload", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("upload");
});


module.exports = router;
