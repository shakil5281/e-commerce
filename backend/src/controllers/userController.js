const User = require('../models/UserModel')
const asyncHandler = require('express-async-handler')
const GenerateToken = require('../utility/GenerateToken')
const bcrypt = require('bcryptjs')


exports.signupUser = asyncHandler(async(req, res) =>{
    try{
        const {name, email, password} = req.body 
        const userExits = await User.findOne({email})
        if(userExits){
            res.status(404).json({message: 'User already exists'})
        }else{
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


exports.getProfile = asyncHandler(async(req, res) =>{
    try{
        
        const user = await User.findById(req.user._id)
        res.status(200).json(user)

    }catch(err){
        console.error(err)
        res.status(500).json({error: err.message || 'Internal server Error'}) 
    }
})

