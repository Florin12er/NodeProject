const express = require('express')
const router = express.Router()
const Book = require('../models/book.cjs')

// All Book Route
router.get('/', async (req, res) => {
res.render("books/new")
})

// New Book Route
router.get('/new', (req, res) => {
    res.send("new")
})

// Create Book Route
router.post('/', async (req, res) => {
    res.send("create")
})

module.exports = router
