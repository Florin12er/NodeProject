require("dotenv").config();

const express = require("express");
const Routes = require("./routes/index.cjs");
const Authors = require("./routes/authors.cjs");
const Error = require("./routes/404.cjs");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("MongoDB Connected"));

// Set up view engine and static files
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(expressLayouts);
app.use(express.static("public"));

// Route setup
app.use("/", Routes);
app.use("/authors", Authors);

// 404 Error handler as middleware
app.use((req, res, next) => {
    res.status(404).render("404", { layout: false });
});


app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running...");
});
