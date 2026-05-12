const { Router } = require('express');
const controller = require('../controllers/pokenea.controller');
const router = Router();

router.get('/', controller.getPokeneaHtml);

module.exports = router;