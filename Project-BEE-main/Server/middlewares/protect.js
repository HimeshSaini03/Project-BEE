// // protect.js
// const jwt = require("jsonwebtoken");
// const { constants } = require("../constants");

// const protect = (req, res, next) => {
//     const token = req.headers.authorization && req.headers.authorization.startsWith("Bearer")
//         ? req.headers.authorization.split(" ")[1]
//         : null;

//     if (!token) {
//         const error = new Error("Not authorized, no token");
//         res.status(constants.UNAUTHORIZED);
//         return next(error);
//     }

//     try {
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         req.user = decoded; // Set user info from token in request
//         next();
//     } catch (error) {
//         const jwtError = new Error("Not authorized, token failed");
//         res.status(constants.UNAUTHORIZED);
//         next(jwtError);
//     }
// };

// module.exports = protect;

// const createToken=jwt.sign(payload,process.env.JWT_SECRET,(err,token)=>{
//     if(err){
//         console.error("INVALID: ",err.message)
//     }
//     else{
//         console.log(token);
//     }
// });

// const token = req.headers.authorization.split(' ')[1];

// const validateToken= jwt.verify(token, process.env.PRIVATE_KEY);
// console.log(decoded.foo) // bar

// // verify a token symmetric
// jwt.verify(token, process.env.PRIVATE_KEY, function(err, decoded) {
//   console.log(decoded.foo) // bar
// });

// // invalid token - synchronous
// try {
//   var decoded = jwt.verify(token, 'wrong-secret');
// } catch(err) {
//   // err
// }

// // invalid token
// jwt.verify(token, 'wrong-secret', function(err, decoded) {
//   // err
//   // decoded undefined
// });

// // verify a token asymmetric
// var cert = fs.readFileSync('public.pem');  // get public key
// jwt.verify(token, cert, function(err, decoded) {
//   console.log(decoded.foo) // bar
// });

// // verify audience
// var cert = fs.readFileSync('public.pem');  // get public key
// jwt.verify(token, cert, { audience: 'urn:foo' }, function(err, decoded) {
//   // if audience mismatch, err == invalid audience
// });

// // verify issuer
// var cert = fs.readFileSync('public.pem');  // get public key
// jwt.verify(token, cert, { audience: 'urn:foo', issuer: 'urn:issuer' }, function(err, decoded) {
//   // if issuer mismatch, err == invalid issuer
// });

// // verify jwt id
// var cert = fs.readFileSync('public.pem');  // get public key
// jwt.verify(token, cert, { audience: 'urn:foo', issuer: 'urn:issuer', jwtid: 'jwtid' }, function(err, decoded) {
//   // if jwt id mismatch, err == invalid jwt id
// });

// // verify subject
// var cert = fs.readFileSync('public.pem');  // get public key
// jwt.verify(token, cert, { audience: 'urn:foo', issuer: 'urn:issuer', jwtid: 'jwtid', subject: 'subject' }, function(err, decoded) {
//   // if subject mismatch, err == invalid subject
// });

// // alg mismatch
// var cert = fs.readFileSync('public.pem'); // get public key
// jwt.verify(token, cert, { algorithms: ['RS256'] }, function (err, payload) {
//   // if token alg != RS256,  err == invalid signature
// });

// // Verify using getKey callback
// // Example uses https://github.com/auth0/node-jwks-rsa as a way to fetch the keys.
// var jwksClient = require('jwks-rsa');
// var client = jwksClient({
//   jwksUri: 'https://sandrino.auth0.com/.well-known/jwks.json'
// });
// function getKey(header, callback){
//   client.getSigningKey(header.kid, function(err, key) {
//     var signingKey = key.publicKey || key.rsaPublicKey;
//     callback(null, signingKey);
//   });
// }

// jwt.verify(token, getKey, options, function(err, decoded) {
//   console.log(decoded.foo) // bar
// });;
