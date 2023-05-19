const express = require('express');
const route=express.Router();
const {createUserController,getUserController, deleteUserController, updateUserControllers, specificUserController} = require('../controller/postcontroller')

// Insert post
route.post('/addpost',createUserController);

// Fetch post
route.get('/fetchpost',getUserController);

// delete post
route.delete('/deletepost/:id',deleteUserController);

// update post
route.put("/updatepost/:id",updateUserControllers)

// Specific post
route.get("/specificpost/:id",specificUserController)

module.exports=route;