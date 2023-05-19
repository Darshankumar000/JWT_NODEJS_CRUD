const express = require("express");
const http = require('http')
const app=require("./app");
const route= require('./routes/route')
const { default: mongoose } = require('mongoose');
const server = http.createServer(app)

const{API_PORT}=process.env;
const port = process.env.PORT||API_PORT;

app.use(express.json());
app.use('/users',route);

//server listening
server.listen(port,()=>{
    console.log(`server listening on ${port}`);
})