const { Router } = require('express');
const controller = require('../controllers/pokenea.controller');
const router = Router();

router.get('/pokenea', controller.getPokeneaJson);

module.exports = router;