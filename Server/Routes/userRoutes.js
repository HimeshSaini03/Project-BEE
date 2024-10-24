const express = require("express");
const rputer = express.Router();

const {
    registerUser,
    loginUser
} = require("../controllers/userControllers");

//Route for use registration
Router.post("/register",registerUser);

//Router for user login
Router.post("/login",loginUser);

module.exports = router;