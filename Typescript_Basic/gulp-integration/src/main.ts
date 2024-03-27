import Book from "./model/book";

const book = new Book('A Book', 100.00, 0.10)
console.log(book.priceWithDiscount())