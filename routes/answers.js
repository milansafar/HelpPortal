var express = require('express');
var router = express.Router();
var answer = require('../db/answer')
const { check, validationResult } = require('express-validator');
var csrf = require('csurf')

// setup route middlewares
var csrfProtection = csrf({ cookie: true })

router.get(
    '/add', 
    csrfProtection, 
    function (req, res, next) {
        res.render(
            'answers/add', 
            { 
                title: 'Add Answer', 
                csrfToken: req.csrfToken()
            }
        );
    }
);

router.post(
    '/', 
    [
        check('title')
            .not().isEmpty()
            .trim().withMessage('Title must be filled'),
        check('description')
            .not().isEmpty()
            .trim().withMessage('Description must be filled'),
    ],

    csrfProtection,

    function (req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {

            res.render(
                'answers/add', 
                { 
                    title: 'Add Answer', 
                    csrfToken: req.csrfToken(),
                    errors: errors.array()
                }
            );
        } else {
            answer.create({title: req.body.title , description: req.body.description});
            res.redirect('/'); 
        }
    }
);

module.exports = router;
