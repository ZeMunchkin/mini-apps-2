const express = require('express');
const data = require('./data/sampleData');

const router = express.Router();

const headers = { 'Content-Type': 'application/json' };

router.get('/data', (req, res) => {
  res.set(headers);
  res.json(data);
});

module.exports = router;
