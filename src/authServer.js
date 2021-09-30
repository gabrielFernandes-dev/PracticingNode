require('./database');
require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));
app.use(express.json());


app.listen(4000, () => {
  console.log(`Auth server running on http://localhost:4000/`);
});
