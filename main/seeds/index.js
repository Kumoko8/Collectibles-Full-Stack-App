const sequelize = require('../config/connection');
const seedCollection = require('./collectionData');
const seedItem = require('./itemData');
const seedUser = require('./userData')

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedCollection();

  await seedItem();

  

  process.exit(0);
};

seedAll();