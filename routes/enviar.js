var express = require('express');
var router = express.Router();

/* GET services page. */
router.get('/', function(req, res) {
    console.log(req.body);
    res.render('contacts');
  });

  module.exports = router;