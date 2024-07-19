const express = require("express");
const app = express();

const dotenv = require("dotenv");

const connectDatabase = require("./config/database");

////////////////////////////////////////
// Setting up config.env file variables
///////////////////////////////////////
dotenv.config({ path: "./config/config.env" });
//////////////////////////////
// Connectiong to database
///////////////////////////////
connectDatabase();

/////////////////////////////////////
//Creating own middleware
/////////////////////////////////////
const middleware = (req, res, next) => {
  console.log("Hello from middleware");

  //Setting up user variable globbally
  //req.user = "Charles Caleb";

  req.requestMethod = req.url;

  next();
};

app.use(express.json()); //Setup body parcer: for reading body: use express json by drizzy
app.use(middleware);

/////////////////////////
// Importing all routes
//////////////////////////
const jobs = require("./routes/jobs");

app.use("/api/v1", jobs); //for all jobs route /api/v1 will be added automatically

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(
    `Server started on port ${process.env.PORT} in ${process.env.NODE_ENV} mode.`
  );
});

//npm i express dotenv --save
//npm i nodemon --save-dev
//npm run dev : for development mode
//npm run pro : for production mode
