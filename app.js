const express = require("express");
const app = express();
const usersrouter = require("./routes/users.js");
const flightdetailrouter = require("./routes/flightdetail");
const cardofferrouter = require("./routes/cardoffer");
const mumbairouter = require("./routes/mumbai.js")
const delhirouter = require("./routes/delhi.js")
const bangalorerouter = require("./routes/bangalore.js")
const kolkatarouter = require("./routes/kolkata.js")
const bookingrouter = require("./routes/booking.js")
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

app.use("/Mumbai",mumbairouter);

app.use("/Delhi",delhirouter);

app.use("/Bangalore",bangalorerouter)

app.use("/Kolkata",kolkatarouter)

app.use("/booking",bookingrouter)

mongoose.connect(process.env.mongoconnection);

module.exports = app;
