const { Item } = require('../models');
//import the imagekit.upload object and use the url endpoint for filename
const itemdata = [
  {
    name: 'Siam',
    description:
      'A rare cat from Siam adopted in Egypt ',
    filename: 'cat.jpg',
    date_of_collection: 'April 1, 2000',
    collection_id: 1,
    
    
  },
    {
    name: 'Jackie Robinson Card',
    description:
      'A rare card from Dodgers Team',
    filename: 'card.jpg',
    date_of_collection: 'April 1, 1965',
    collection_id: 2,
    
    
  },
    {
    name: 'Beanie Baby White Bear',
    description:
      'A rare beanie from the 70s ',
    filename: 'bear.jpg',
    date_of_collection: 'April 1, 1970',
    collection_id: 3,
    
    
  },
  
];

const seedItems = () => Item.bulkCreate(itemdata);

module.exports = seedItems;
