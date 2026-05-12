'use strict';
const { pokeneas } = require('../data/pokeneas');
const { Pokenea }  = require('../models/pokenea.model');

function getRandom() {
  const randomIndex = Math.floor(Math.random() * pokeneas.length);
  return new Pokenea(pokeneas[randomIndex]);
}

module.exports = { getRandom };