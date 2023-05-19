const userModel = require("../model/addpost");

const createUserController =async(req,res)=>{
    try {
        const {title,body,createdby,active,location}=req.body;
        const users = await new userModel({title,body,createdby,active,location}).save();
        res.status(201).send({
            success:true,
            message:"Post Created",
            users
        })
    } catch (error) {
        console.log(error);
    }
}
const getUserController=async(req,res)=>{
    try {
        const users = await userModel.find();
        res.status(200).send({
            success:true,
            message:"Post Fetched",
            users
        })
    } catch (error) {
        console.log(error);
    }
}

const deleteUserController = async(req,res)=>{
    try {
        const users = await userModel.findByIdAndDelete(req.params.id);
        res.status(200).send({
            success:true,
            message:"Post deleted",
            users
        })
    } catch (error) {
        console.log(error);
    }
}

const updateUserControllers = async (req,res)=>{
    const {title,body,createdby,active,location} =req.body;
    try {
        const users = await userModel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
        res.status(200).send({
            success:true,
            message:"Post updated",
            users
    })
    } catch (error) {
      console.log(error);  
    }
}

const specificUserController = async (req,res)=>{
    try {
        const users = await userModel.findById(req.params.id);
        res.status(200).send({
            success:true,
            message:"Specific Record",
            users
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports={createUserController,getUserController,deleteUserController,updateUserControllers,specificUserController};

