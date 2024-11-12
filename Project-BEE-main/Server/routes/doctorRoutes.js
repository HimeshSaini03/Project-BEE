const express = require("express");
const router = express.Router();
const { registerDoctor, getAllDoctors } = require("../controllers/doctorController");
const { validateJwtToken } = require("../middlewares/jwtmiddleware");

// Route to register a new doctor
router.post("/register", registerDoctor);

// Route to get all doctors
router.get("/",validateJwtToken, getAllDoctors); // This route fetches all doctor details

module.exports = router;
