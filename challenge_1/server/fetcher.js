const request = require('request-promise');
const db = require('../db/mongoSchema');
const COIN_API = require('../config/coinApi');

const fetch = () => {
  setInterval(() => {
    request({
      uri: 'http://rest.coinapi.io/v1/ohlcv/BITSTAMP_SPOT_BTC_USD/latest?period_id=1DAY&limit=1',
      headers: {
        'X-CoinAPI-Key': COIN_API,
        Accept: 'application/json',
      },
    })
      .then((data) => {
        data.forEach((coinObj) => {
          db.insert(coinObj);
        });
      })
      .catch((err) => {
        console.log('Request not working', err); // eslint-disable-line
      });
  }, 1000 * 60 * 60 * 24); // ms * sec * min * hr = 1 day
};

module.exports = fetch;
