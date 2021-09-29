const axios = require('axios');
const BASE_URL = 'https://swapi.dev/api';

module.exports = {
  async getCharacter(req, res) {
    try {
      const character = (await axios.get(`${BASE_URL}/people/${req.params.id}`))
        .data;
      res.status(200).json({
        status: 'success',
        data: character,
      });
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  },
  async getPlanet(req, res) {
    try {
      const character = (await axios.get(`${BASE_URL}/planets/${req.params.id}`))
        .data;
      res.status(200).json({
        status: 'success',
        data: character,
      });
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  },
  async getStarship(req, res) {
    try {
      const character = (await axios.get(`${BASE_URL}/starships/${req.params.id}`))
        .data;
      res.status(200).json({
        status: 'success',
        data: character,
      });
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  },
};
