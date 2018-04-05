const express = require('express');
const db = require('../mongo/schema');

const router = express.Router();

const validFields = ['transId', 'fullName', 'email', 'password', 'address1', 'address2', 'city', 'state', 'shipZip', 'phone',
  'ccNum', 'expiration', 'cvv', 'ccZip'];
let allValid = true;

router.post('/', (req, res) => {
  for (let key in req.body) { // eslint-disable-line
    if (!validFields.includes(key)) {
      allValid = false;
      break;
    }
    if (typeof req.body[key] !== 'string') {
      allValid = false;
      break;
    }
  }
  if (!allValid) {
    res.sendStatus(400);
  } else {
    db.insert(req.body)
      .then((data) => {
        // res.writeHead(201);
        res.json(data);
      })
      .catch(() => {
        res.sendStatus(500);
      });
  }
});

router.put('/', (req, res) => {
  if (!req.body.transId) {
    res.sendStatus(400);
  }
  for (let key in req.body) { // eslint-disable-line
    if (!validFields.includes(key)) {
      allValid = false;
      break;
    }
    if (typeof req.body[key] !== 'string') {
      allValid = false;
      break;
    }
  }
  if (!allValid) {
    res.sendStatus(400);
  } else {
    const id = req.body.transId;
    delete req.body.transId;
    db.update(id, req.body)
      .then(() => {
        res.sendStatus(200);
      })
      .catch(() => {
        res.sendStatus(500);
      });
  }
});

router.get('/:id', (req, res) => {
  db.find(req.params.id)
    .then((data) => {
      res.json(data);
    })
    .catch(() => {
      res.sendStatus(500);
    });
});

module.exports = router;
