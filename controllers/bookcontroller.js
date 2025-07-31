let books = [
  { id: 1, title: "The Hobbit" },
  { id: 2, title: "1984" },
];

exports.getAllBooks = (req, res) => {
  res.json(books);
};

exports.addBook = (req, res) => {
  const newBook = {
    id: books.length + 1,
    title: req.body.title,
  };
  books.push(newBook);
  res.status(201).json(newBook);
};
