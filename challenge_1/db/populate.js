const db = require('./mongoSchema');
const data = require('../data/sampleData.js');

const populate = () => {
  const promises = [];
  for (let i = 0; i < data.length; i += 1) {
    promises.push(db.insert(data[i]));
  }
  Promise.all(promises)
    .then(() => console.log('Success loading!'))
    .catch(() => console.log('Error loading DB'));
};

populate();
