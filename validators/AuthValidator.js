const { check} = require('express-validator');
const checkErrors = require('./result');

const register = [
    check('firstName').isAlpha(),
    check('lastName').isAlpha(),
    check('email').isEmail(),
    check('password').isLength({ min: 6 }),
    //check('passwordConfirm').equals('password'),
    checkErrors
];

const login = [
    check('email').isEmail(),
    check('password').isLength({ min: 6}),
    checkErrors
];


module.exports = {
    register,
    login

}
