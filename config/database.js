const mongoose=require('mongoose');
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("successfully connected to database");
    })
    .catch((err)=>{
        console.log("error connecting to database");
        console.error(err);
        
    })