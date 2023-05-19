const express = require("express");
const app = express();
const usersrouter = require("./routes/users.js");
const flightdetailrouter = require("./routes/flightdetail");
const cardofferrouter = require("./routes/cardoffer");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// middleware
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(morgan("dev"));

app.use("/user", usersrouter);

app.use("/flightdetails", flightdetailrouter);

app.use("/cardoffer", cardofferrouter);



mongoose.connect(process.env.mongoconnection);

module.exports = app;
