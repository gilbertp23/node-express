var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('raptors are going to lose in 6');
});

module.exports = router;
