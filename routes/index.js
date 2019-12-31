var express = require('express');
var router = express.Router();
var answer = require('../db/answer')

/* GET home page. */
router.get('/', function(req, res, next) {
  answer.findAll().then(answers => {
    res.render('index', { title: 'Customer Portal', answers: answers});
  });
});

router.get('/create', function (req, res, next) {
  answer.create({title: "title", description: "desription"});

  res.redirect('/');
});

module.exports = router;
