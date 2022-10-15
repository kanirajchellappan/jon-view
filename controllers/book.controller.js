const model = require("../models/books.model");

function postBook(req, res) {
  if (!req.body.book_name) {
    return res.status(400).json({
      error: "Missing book_name",
    });
  }

  const newBook = {
    id: model.length,
    book_name: req.body.name,
    book_id: req.body.book_id,
    book_url: req.body.book_url,
    book_img: req.body.book_img,
  };
  model.push(newBook);

  res.json(newBook);
}

function getBooks(req, res) {
  res.json(model);
}

function getBook(req, res) {
  const bookId = Number(req.params.bookId);
  const Book = model[bookId];
  if (Book) {
    res.status(200).json(Book);
  } else {
    res.status(404).json({
      error: "Books does not exist",
    });
  }
}

module.exports = {
  postBook,
  getBooks,
  getBook,
};
