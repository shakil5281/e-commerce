const express = require('express');
const router = express.Router();
const userController= require('../src/controllers/userController')
const authController= require('../src/meddleware/AuthVerify')



router.route('/signin').post(userController.signinUser)
router.route('/signup').post(userController.signupUser)
router.route('/profile').get(authController, userController.getProfile)

module.exports = router;