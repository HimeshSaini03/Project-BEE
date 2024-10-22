// mongoose module require maane package install krna pdega
const mongoose=require("mongoose");
const connectDb=async()=>{
    try{
        const connect = await mongoose.connect(process.env.CONNECTION_STRING)
        console.log("Connected to mongo")
        

    }catch(error){
        console.log(error)
    }
}
module.exports=connectDb;