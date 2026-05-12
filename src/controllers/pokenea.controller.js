'use strict';
const service = require('../services/pokenea.service');

function getPokeneaJson(req, res) {
  const pokenea = service.getRandom();
  return res.json({
    containerId: process.env.HOSTNAME || 'local',
    id:       pokenea.getId(),
    name:     pokenea.getName(),
    height:   pokenea.getHeight(),
    ability:  pokenea.getAbility(),
  });
}

function getPokeneaHtml(req, res) {
  const pokenea = service.getRandom();
  return res.render('pokenea', {
    pokenea,
    containerId: process.env.HOSTNAME || 'local',
  });
}

module.exports = { getPokeneaJson, getPokeneaHtml };