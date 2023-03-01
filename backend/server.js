const express = require('express');
const app = express();
const path = require("path");
const { readdirSync } = require("fs");
const mongoDB = require('./src/meddleware/Database')
const errorHandler = require('./src/meddleware/errorHendler')
require('colors');
require('dotenv').config()


const PORT = process.env.PORT || 8080


readdirSync("./routes").map(r => app.use("/api/v1", require(`./routes/${r}`))) 

// error handler
app.use((req, res, next) =>{
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
        res.status(statusCode).json({message: 'Server error'})
    next()
})


// Database configuration
mongoDB()


app.listen( PORT, () =>{
    console.log(`server start on - ${PORT}`.cyan);
})