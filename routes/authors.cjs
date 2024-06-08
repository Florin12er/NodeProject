const express = require("express");
const router = express.Router();

// Main authors page
router.get("/", (req, res) => {
  res.render("authors/index");
});

// the new Author created
router.get("/new", (req, res) => {
  res.render("authors/new");
});
// create author Route
router.post("/", (req, res) => {
  res.send("Author Created");
});
module.exports = router;
