require('./database');
require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const app = express();
const router = express.Router();
const AuthHandler = require('./middlewares/Auth');

app.use(morgan('dev'));
app.use(express.json());

router.post('/login', AuthHandler.authenticate);
router.post('/token', AuthHandler.refreshAccessToken);
router.delete('/logout', AuthHandler.deauthenticate);

app.use('/api', router);

app.listen(4000, () => {
  console.log(`Auth server running on http://localhost:4000/`);
});
