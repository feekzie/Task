var express = require('express');
var router = express.Router();

var ctrlFile = require('../controllers/file.controller.js');
// Routes to endpoint
router
  .route('/readfile')
  .get(ctrlFile.fileGetAll);

module.exports = router;