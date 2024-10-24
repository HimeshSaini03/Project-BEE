const asyncHandler = require("express-async-handler");

const bcrypt=require("bcrypt");
const User=require("../model/userModel");
require("dotenv").config();


const registerUser = asyncHandler(async(req,res)=>{
    const{name,email,password,phoneNumber} = req.body;

    if(!name || !email || !password || !phoneNumber){
        res.status(400);
        throw new Error("Please provide all fields");
    }

    //check if user already exists
    const userExists = await UserActivation.findOne({email});
    if(userExists){
        return res.status(400).json({message:"User already Exists"});
    }

    //Hash password
    const salt = await bcrypt.gensalt(10);
    const hashPassword =await bcrypt.hash(passowrd,salt);

    //create the user
    const user = await User.create({
        name,
        email,
        phoneNumber,
        passwoird: hashPassword,
    });


    res.status(201).json({massage:"User registered succesfully" , user});
})






