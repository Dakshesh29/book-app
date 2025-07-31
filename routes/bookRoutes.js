const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookcontroller");

router.get("/", bookController.getAllBooks);
router.post("/", bookController.addBook);

module.exports = router;
