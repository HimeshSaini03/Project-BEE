const mongoose = require("mongoose");

const newsletterSchema = mongoose.Schema({
    title: {
        type: String, 
        required: [true, "please add title"], // Corrected 'require' to 'required'
    },
    author: {
        type: String, 
        required: [true, "please add author name"], // Corrected 'require' to 'required'
    },
    date: {
        type: Date, 
        required: [true, "please add date"], // Corrected error message
    },
    imageUrl: {
        type: String, 
        required: [true, "please add imageUrl"], // Corrected 'require' to 'required'
    },
    description: {
        type: String, 
        required: [true, "please add Newsletter description"], // Corrected 'require' to 'required'
    }
}, {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
});

module.exports = mongoose.model("Newsletter", newsletterSchema);
