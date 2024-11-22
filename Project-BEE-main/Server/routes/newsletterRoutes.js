const express=require("express");
const router =express.Router();
const{getNewsletter,createNewsletter}=require("../controllers/newsletterController")
const {validateJwtToken}=require("../middlewares/jwtmiddleware");
router.get("/",getNewsletter);
router.post("/",validateJwtToken,createNewsletter);
module.exports = router;