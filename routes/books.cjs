const express = require("express");
const router = express.Router();

// Main authors page
router.get("/", (req, res) => {
  res.render("books/index");
});

// the new Author created
router.get("/new", (req, res) => {
  res.render("books/new");
});
// create author Route
router.post("/", (req, res) => {
  res.send("Book Created");
});
module.exports = router;
