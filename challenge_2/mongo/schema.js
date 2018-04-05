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

module.exports.insert = insert;
