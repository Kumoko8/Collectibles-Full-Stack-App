const router = require("express").Router();

const withAuth = require("../utils/auth");
const { Collection, Item} = require("../models");

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

router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ 
      where: { 
        email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res
        .status(200)
        .json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
// Get Collections
router.get("/collections", withAuth, async (req, res) => {
  try {
    const userId = req.session.user_id
    const dbCollectionData = await Collection.findAll({
      where:{user_id: userId},
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
      pageTitle: "Collections",
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
let newCollection;
router.post("/create", withAuth, async (req, res) => {
  const { name, message } = req.body
  const userId = req.session.user_id
  try {
    newCollection = await Collection.create({
      name,
      message,
      user_id: userId
    });
  
    res.redirect("/collections");
  } catch (err) {
    // console.log(err);
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
