const express = require('express');
const db = require('../db/mongoSchema');

const router = express.Router();

const headers = { 'Content-Type': 'application/json' };

router.get('/data', (req, res) => {
  db.find()
    .then((data) => {
      res.set(headers);
      res.json(data);
    })
    .catch(() => {
      res.sendStatus(500);
    });
});

module.exports = router;
