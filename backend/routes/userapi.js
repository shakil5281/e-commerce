const express = require('express');
const router = express.Router();
const userController= require('../src/controllers/userController')


router.route('/signin').post(userController.signinUser)
router.route('/signup').post(userController.signupUser)

module.exports = router;