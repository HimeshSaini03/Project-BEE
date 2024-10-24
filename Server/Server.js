  // const express = require('express');
  // const app = express();

  // // Define the port
  // const PORT = 3000;

  // // Create a basic route
  // app.get('/', (req, res) => {
  //   res.send('Hello, Express!');
  // });




  // FRAMEWORK CONFIGURATION

  const express = require("express");
  const connectDb = require("./config/dbConnection"); // Ensure this path is correct
  //const errorHandler = require("./middleware/errorHandler"); // Ensure this path is correct
  const cors = require("cors");
  const hbs=require("hbs")
  // Connect to the database

  // Create an Express application
  // Middleware
  // app.use(express.json());
  // app.use(cors());

  // Basic route
  // app.get("/", (req, res) => {
  //     res.send("Hello World");
  // });

  // Error handling middleware
  // app.use(errorHandler);

  // Start the server
  // app.listen(port, () => {
  //     console.log(Server is running on port ${port});
  // });

  // env file configz
  const dotenv=require("dotenv");
  dotenv.config();
  connectDb();
  const app = express();
  app.set('view engine','hbs');

  hbs.registerPartials(__dirname + '/views/partials'); // Path to your partials


  app.get("/home",(req,res)=>{

      res.render("home",{
          username:"Himesh",
          
      })
  })

  const port = process.env.PORT || 5000;
  // jha package.json hoti hai whi installation hoti hai

  // Server listens on the defined port
  app.get("/users",(req,res)=>{
      res.render("users",{

          people:[
              {
                  username:"himesh",
                  age:20
              },
              {
                  username:"saini",
                  age:21
              }
          ]

      })
  })

  app.listen(port, () => {
      console.log( `Server running at http://localhost:${port}/`);
    });