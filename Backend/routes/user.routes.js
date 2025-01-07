const express = require('express');
const router = express.Router();
const { body } = require('express-validator')
const userController = require('../controllers/user.controller');
const middleware = require('../middlewares/auth.middleware');


router.post('/register', [body('email').isEmail().withMessage('Invalid email address'),
body('fullname.firstname').isLength({ min: 4 }).withMessage('First name must be at least 4 characters long'),
body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')], userController.register);


router.post('/login', [body('email').isEmail().withMessage('Invalid email address'),
body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
], userController.loginUser);

router.get('/profile', middleware.authUser ,userController.profile);
router.get('/logout', middleware.authUser, userController.logout);

module.exports = router;