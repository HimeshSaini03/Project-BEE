// const express = require('express');
// const app = express();

// // Define the port
// const PORT = 3000;

// // Create a basic route
// app.get('/', (req, res) => {
//   res.send('Hello, Express!');
// });

// // Server listens on the defined port
// app.listen(PORT, () => {
//   console.log(Server running at http://localhost:${PORT}/);
// });


// FRAMEWORK CONFIGURATION
const express=require("express");
const connectDb=require("./config/dbConnection");
const errorHandler=require("./middleware/errorHandler");
const cors=require("cors");
connectDb();
const app=express ();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());