const express = require('express');
const dotenv = require('dotenv').config();
const port = process.dot.env.PORT || 5000; 

const app = express();

app.listen(port, ()=>{console.log("started")})