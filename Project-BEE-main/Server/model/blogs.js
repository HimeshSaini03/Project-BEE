const mongoose = require("mongoose");

const mongoose = require("mongose");
const blogSchema =mongoose.Schema({
    title:{
        type:String
    },
    imageURL:String
});
module.exports=mongoose.model("Blog",blogSchema);

   
