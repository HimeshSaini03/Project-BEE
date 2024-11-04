const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../model/userModel");
require("dotenv").config();

// Register User Function
const registerUser = asyncHandler(async (req, res) => {
    const { email, firstname, lastname, age, bloodgroup, gender, phoneNumber, password } = req.body;

    if (!firstname || !lastname || !age || !bloodgroup || !gender || !email || !password || !phoneNumber) {
        res.status(400);
        throw new Error("Please provide all fields");
    }

    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
        return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
        email,
        firstname,
        lastname,
        age,
        bloodgroup,
        gender,
        phoneNumber,
        password: hashedPassword,
    });

    res.status(201).json({ message: "User registered successfully", user });
});

// Login User Function
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400);
        throw new Error("Please fill the fields");
    }

    const user = await User.findOne({ email });
    if (!user) {
        res.status(401);
        throw new Error("Invalid email or password");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        res.status(401);
        throw new Error("Invalid email or password");
    }

    res.status(201).json({ message: "User logged in successfully", user });
});

module.exports = { registerUser, loginUser };
