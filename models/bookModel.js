const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  year: { type: Number, required: true },
  quantity: { type: Number, required: true },
  imageURL: { type: String, required: true },
});

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;
