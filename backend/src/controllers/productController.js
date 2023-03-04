const User = require('../models/UserModel')
const asyncHandler = require('express-async-handler')
const Product = require('../models/ProductModel')


exports.createProduct = asyncHandler(async (req, res, next) => {
    try {
        const { } = req.body


    } catch (err) {
        console.error(err)
        res.status(500).json({ error: err.message || 'Internal server Error' })
    }
})



exports.product = asyncHandler(async (req, res) => {
    try {
        await Product.find()
        res.status(200).json({ status: 'Ok', Product })

    } catch (err) {
        console.error(err)
        res.status(500).json({ error: err.message || 'Internal server Error' })
    }
})


exports.productId = asyncHandler(async (req, res) => {
    try {

    } catch (err) {
        console.error(err)
        res.status(500).json({ error: err.message || 'Internal server Error' })
    }
})
