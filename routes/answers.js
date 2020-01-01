var express = require('express');
var router = express.Router();
var answer = require('../db/answer')

router.get('/add', function (req, res, next) {
    res.render('answers/add', { title: 'Add Answer'});
});

router.post('/', function (req, res, next) {
  answer.create({title: req.body.title , description: req.body.description});
  res.redirect('/');
});

module.exports = router;
