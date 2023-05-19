require("dotenv").config();
require('./config/database');
const express = require("express");
const app = express();
const User=require("./model/users")//import user context
const bcrypt=require("bcrypt");

app.use(express.json());

//register
app.use("/register",async(req,res)=>{
    try{
        const {fname,lname,email,password}=req.body;

        if(!(email && password && fname && password)){
            res.status(400).send("all input is reuired")
        }

        const oldUser=await User.findOne({email})

        if(oldUser){
            return res.status(409).send("user alerady exists.please login")
        }

        encryptedPassword=await bcrypt.hash(password,10);

        const user= await User.create({
            fname,
            lname,
            email:email.toLowerCase(),
            password:encryptedPassword,
        });


        // const token=jwt.sign(
        //     {user_id:user_id,email},
        //     process.env.TOKEN_KEY,
        //     {expiresIn:"2h"},
        // );
        // user.token=token;
        res.status(201).json(user);
    }catch(err){
        console.log(err);
    }
});
//login
app.use("/login",async(req,res)=>{

    try {
        // Get user input
        const { email, password } = req.body;
    
        // Validate user input
        if (!(email && password)) {
          res.status(400).send("All input is required");
        }
        // Validate if user exist in our database
        const user = await User.findOne({ email });
    
        if (user && (await bcrypt.compare(password, user.password))) {
          // Create token
        //   const token = jwt.sign(
        //     { user_id: user._id, email },
        //     process.env.TOKEN_KEY,
        //     {
        //       expiresIn: "2h",
        //     }
         // );
    
          // save user token
        //   user.token = token;
    
          // user
          res.status(200).json(user);
        }
        res.status(400).send("Invalid Credentials");
      } catch (err) {
        console.log(err);
      }
      // Our register logic ends here
    });

   

    

module.exports = app;