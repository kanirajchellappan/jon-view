const express = require("express");

const booksController = require("../controllers/book.controller");

const booksRouter = express.Router();

booksRouter.post("/", booksController.postBook);
booksRouter.get("/", booksController.getBooks);
booksRouter.get("/:bookId", booksController.getBook);

module.exports = booksRouter;
