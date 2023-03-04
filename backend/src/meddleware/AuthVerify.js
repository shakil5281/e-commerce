const bycrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler')


const authVerify = asyncHandler(async(req, res, next) => {
    const token = req.header('x-auth-token');
    try{
        

    }catch(err){
        console.log(err.message)
        res.status(403).json({message: err.message})
    }

})

module.exports = authVerify