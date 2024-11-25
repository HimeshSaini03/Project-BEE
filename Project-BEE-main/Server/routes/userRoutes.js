// routes/userRoutes.js
const express = require('express');
const {generateToken,validateJwtToken} = require('../middlewares/jwtmiddleware'); // Assuming this is your JWT middleware
const { registerUser, loginUser,myAccount } = require('../controllers/userController'); // Assuming controllers for user actions

const router = express.Router();

// Route to register a new user
router.post("/register", registerUser);

// Route to login a user
router.post("/login",loginUser);
//router.get("/myAccount",validateJwtToken,myAccount);
//router.put('/myAccount', validateJwtToken, myAccount);
router


module.exports = router;
