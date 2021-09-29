require('./database');
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const app = express();
const routes = require('./routes');

// app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan('dev'));
app.use('/api', routes);

app.listen(process.env.PORT || 8000, () => {
  console.log(`Server running on http://localhost:8000`);
});
