var jwt=require('jsonwebtoken');
const generateToken=(userData)=>{
    return jwt.sign(userData,process.env.PRIVATE_KEY);
}
const validateJwtToken=(req,res,next)=>{
    const authorization=req.headers.authorization;

    if(!authorization){
        res.status(401).json({err:"Token not available"});
    }
    const token=req.headers.authorization.split(' ')[1];

    if(!token){
        return res.status(401).json({err:"Unauthorized User"});
    }

    try{
        const validateToken=jwt.verify(token,process.env.PRIVATE_KEY);
        req.user=validateToken;
        next();
    }
    catch(err){
        console.error("Error Occured: " + err.message);
    }
}

module.exports={generateToken,validateJwtToken}