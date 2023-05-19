const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    title:{
        type:String,
        default:null,
    },
    body:{
        type:String,
        default:null,
    },
    createdby:{
        type:String,
        unique:true,
    },
    active:{
        type:String,
    },
    location:{
        type:String,
    },

})

module.exports=mongoose.model("addpost",userSchema);