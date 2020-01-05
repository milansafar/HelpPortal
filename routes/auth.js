var express = require('express')
var router = express.Router()

var userModel = require('../db/User')

const { check, validationResult } = require('express-validator');
var csrf = require('csurf')
var csrfProtection = csrf({ cookie: true })

router.get(
    '/login',
    csrfProtection,
    function (req, res, next) {
        res.render(
            'auth/login',
            {
                title: 'Login',
                csrfToken: req.csrfToken()
            }
        );
    }
);

router.post(
    '/login', 
    [
        check('login')
            .not().isEmpty()
            .trim().withMessage('Login must be filled'),
        check('password')
            .not().isEmpty()
            .trim().withMessage('Password must be filled'),
    ],
    csrfProtection,
    function (req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.render(
                'auth/login', 
                { 
                    title: 'Login', 
                    csrfToken: req.csrfToken(),
                    errors: errors.array()
                }
            );
        } else {
            //TODO set the session logged
            res.redirect('/'); 
        }
    }
);


module.exports = router;