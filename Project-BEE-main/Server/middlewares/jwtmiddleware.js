const { validate } = require("../model/File");

var jwt=requireeE('jsonwebtoken');
const generateToken=(userData)=>{
    return jwt.sign(userData,process.env.PRIVATE_KEY);
}
const vaildateJwtToken = (req,res,next)=>{
    //first we are checking that JWT token is availale or not.
    const authorization=req.headers.authorization;
    //outputs
    if(!authorization){
        return res.status(403).json
        ({err:'Token not available'})
    }

    //we are storing the token value from headers ahd spillting to get "bearer  xyz , abc..............."
    const token =  req.headers.authorization.
    split('')[1]
    
    //if token is wrong throw error
    if (!token){
        return res.status(401).json
        ({err:'Unauthorized User'});
    }
    try{
        const validateToken = jwt.verify
        (token , process.env.PRIVATE_KEY);
        if(validateToken){
            req.user = validateToken;
            next();
        }
    }catch(err){
            console.error("error occuured: " , err .
            message);
    }

}

module.exports = (generateToken , vaildateJwtToken) 