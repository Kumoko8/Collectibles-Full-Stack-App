const { Collection } = require('../models');

const collectiondata = [
  {
    name: 'Cats',
    message: "A collection of your favorite cats",
    user_id: 1
  },
  {
    name: 'Beanie Babies',
    message: "A collection of your favorite beanies",
    user_id: 1

  },
  {
    name: 'Baseball Cards',
    message: "A collection of your favorite players",
    user_id: 1
  
  },
  
];

const seedCollection = () => Collection.bulkCreate(collectiondata);

module.exports = seedCollection;
