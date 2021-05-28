const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const path = require("path");
const ejs = require("ejs");
const expressLayouts = require("express-ejs-layouts");
const connectDB = require("./config/db");

//load config
dotenv.config({ path: "./config/config.env" });

//passport config
require("./config/passport")(passport);

//DB callback
connectDB();

const app = express();

//Body parser
app.use(express.urlencoded({ extended: false}))
app.use(express.json())

//logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//setting the views engine and getting the .ejs files from the 'views' folder
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(expressLayouts);
app.set("layout", "layouts/main");
//app.use(express.static('public'))

app.set("dashboard", "/dashboard");

//static folder for css, scripts & img
app.use(express.static(path.join(__dirname, "public")));

//session middleware
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false, //dont create session until something is stored
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);

//passport middleware
app.use(passport.initialize());
app.use(passport.session());

//routes
app.use("/", require("./routes/index"));
app.use("/auth", require("./routes/auth"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port: ${PORT}`
  );
});
