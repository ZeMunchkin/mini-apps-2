const express = require('express');
const db = require('../mongo/schema');

const router = express.Router();

router.post('/', (req, res) => {
  console.log(req.body);

  const allFields = Object.keys(req.body);
  let allValid = true;
  const requiredFields = ['fullName', 'email', 'password', 'address1', 'address2', 'city', 'state', 'shipZip', 'phone',
    'ccNum', 'expiration', 'cvv', 'ccZip'];

  for (let key in req.body) { // eslint-disable-line
    if (!requiredFields.includes(key)) {
      allValid = false;
      break;
    }
    if (typeof req.body[key] !== 'string') {
      allValid = false;
      break;
    }
    if (key !== 'address2' && !req.body[key]) {
      allValid = false;
      break;
    }
  }

  if (allFields.length < 13) {
    res.sendStatus(400);
  } else if (!allValid) {
    res.sendStatus(400);
  } else {
    db.insert(req.body)
      .then(() => {
        res.sendStatus(201);
      })
      .catch(() => {
        res.sendStatus(500);
      });
  }
});

module.exports = router;
