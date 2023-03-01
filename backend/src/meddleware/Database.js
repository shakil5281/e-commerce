const mongoose = require('mongoose');
const asyncHandler = require('express-async-handler')


const mongoDB = asyncHandler(async (req, res) => {
    try {
        mongoose.set('strictQuery', true)
        await mongoose.connect(process.env.DB_URL,{
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
        console.log("Database connected".cyan.bold)

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message || 'Server error' });
    }
})

module.exports = mongoDB