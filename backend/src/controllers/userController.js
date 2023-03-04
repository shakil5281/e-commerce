const User = require('../models/UserModel')
const asyncHandler = require('express-async-handler')
const GenerateToken = require('../utility/GenerateToken')
const bcrypt = require('bcryptjs')


exports.signupUser = asyncHandler(async(req, res) =>{
    try{
        const {name, email, pass} = req.body 
        const userExits = await User.findOne({email})
        if(userExits){
            res.status(404).json({message: 'User already exists'})
        }else{
            const password = await bcrypt.hash(pass, 12)
            const user =new User({name, email, password})
            await user.save()
            res.status(201).json(user)
        }
        


    }catch(err){
        console.error(err)
        res.status(500).json({error: err.message || 'Internal server Error'}) 
    }
})


exports.signinUser = asyncHandler(async(req, res) =>{
    try{
        const {email, password} = req.body 
        
        const user = await User.findOne({email})

        if(user && (await user.matchPassword(password))){
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: GenerateToken(user._id)


            })
        }

    }catch(err){
        console.error(err)
        res.status(500).json({error: err.message || 'Internal server Error'}) 
    }
})

