const express = require('express');
const parse = require('body-parser');
const router = require('./router');

const app = express();
app.use(parse.json());

app.use(express.static('public'));

app.use('/', router);

const port = process.env.PORT || 3400;

app.listen(port, (err) => {
  if (err) {
    console.log('Server Down', err); // eslint-disable-line
  } else {
    console.log(`listening on port ${port}`); // eslint-disable-line
  }
});
