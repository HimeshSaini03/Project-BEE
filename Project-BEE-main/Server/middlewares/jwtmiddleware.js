var jwt=require('jsonwebtoken');
const generateToken=(userData)=>{
    //in this function we are creating a new/fresh JWT Token to provide user,for Login/Session ,management or for authorization purpose.
    return jwt.sign(userData,process.env.PRIVATE_KEY);
}
const validateJwtToken=(req,res,next)=>{
    //first we are checking that Jwt token is available or not.
    const authorization=req.headers.authorization;
    //Output: 1.bearer ghkjgkgbk
    //2. jfkgbjkekj
    //3.
    //4. Token is not made ,even it is Local or with Endpoint testing...without token header it is sent

    if(!authorization){
        res.status(401).json({err:"Token not available"});
    }
    //We are storing the token values from headers and splitting to get "Bearer xyz.abc.kjh" to "xyz.abc.kjh"
    const token=req.headers.authorization.split(' ')[1];

    //Token provided is wrong,throw error message Unauthorized User
    if(!token){
        return res.status(401).json({err:"Unauthorized User"});
    }

    try{
        //In this Error Handler Try Catch: We are handling,if token is validated or verified,then move to  next middleware or respond back to client.
        const validateToken=jwt.verify(token,process.env.PRIVATE_KEY);
        req.user=validateToken;
        next();
    }
    catch(err){
        console.error("Error Occured: " + err.message);
    }
}

module.exports={generateToken,validateJwtToken}