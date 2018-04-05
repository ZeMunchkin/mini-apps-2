const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/checkout');

const purchaseSchema = mongoose.Schema({
  fullName: String,
  email: String,
  password: String,
  address1: String,
  address2: String,
  city: String,
  state: String,
  shipZip: String,
  phone: String,
  ccNum: String,
  expiration: String,
  cvv: String,
  ccZip: String,
});

const Purchases = mongoose.model('Purchases', purchaseSchema);

const insert = purchaseObj => (
  Purchases.create(purchaseObj)
);

const update = (id, purchaseObj) => (
  Purchases.findById(id)
    .then((purchase) => {
      purchase.set(purchaseObj);
      return purchase.save();
    })
);

const find = id => (
  Purchases.findById(id)
);

module.exports.insert = insert;
module.exports.update = update;
module.exports.find = find;
