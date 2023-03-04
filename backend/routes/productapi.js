const express = require('express');
const router = express.Router();
const productController = require('../src/controllers/productController')

router.route('/product').get(productController.product)
router.route('/product/:id').get(productController.productId)


module.exports = router;