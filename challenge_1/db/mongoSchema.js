const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/cryptocurrency');

const bitcoinSchema = mongoose.Schema({
  time_period_start: String,
  time_period_end: String,
  time_open: String,
  time_close: String,
  price_open: Number,
  price_high: Number,
  price_low: Number,
  price_close: Number,
  volume_traded: Number,
  trades_count: Number,
});

const Bitcoin = mongoose.model('Bitcoin', bitcoinSchema);

const insert = (coinObj) => {
  const coin = new Bitcoin(coinObj);
  return coin.save();
};

const find = () => (
  Bitcoin.find().limit(30).sort('-time_close')
);

module.exports.insert = insert;
module.exports.find = find;
