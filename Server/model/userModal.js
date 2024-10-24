const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        Email:{
            type:email,
            require:[true,"Please add your email"],
        },
        First_Name:{
            type:String,
            require:[true,"Please add your first name"],
        },
        Last_Name:{
            type:String,
            require:[true,"Please add your last name"],
        },
        Age:{
            type:Integer,
            require:[true,"Please add your age"],
        },
        Blood_Group:{
            type:String,
            require:[true,"Please add your blood group"],
        },
        Gender:{
            type:String,
            require:[true,"Please add your gender"],
        },
        Phone_Numeber:{
            type:Int,
            require:[true,"Please add your Phone Number"],
        }
    },
    {
        timestamps: true,   
    }
);

modules.exports = mongoose.model("User",userSchema);