const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        firstname: {
            type: String,
            required: [true, "Please add your name"],  // Fixed "required" typo
        },
        email: {
            type: String,
            required: [true, "Please add your email"],
            unique: true,
        },
        password: {
            type: String,
            required: [true, "Please add your password"],
        },
        phoneNumber: {
            type: String,
            required: [true, "Please add your phone number"],
        }
    },

    {
        timestamps: true,  // This should be placed here
    }
);

module.exports = mongoose.model("User", userSchema);
