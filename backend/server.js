const express = require('express');
const app = express();
const path = require("path");
const { readdirSync } = require("fs");
const mongoDB = require('./src/meddleware/Database')
require('colors');
require('dotenv').config()

const PORT = process.env.PORT || 8080



readdirSync("./routes").map(r => app.use("/api/v1", require(`./routes/${r}`))) 

// Database configuration
mongoDB()


app.listen( PORT, () =>{
    console.log(`server start on - ${PORT}`.cyan);
})