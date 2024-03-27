import $ from 'jquery';
import Book from "./model/book";

const book = new Book('A Book', 100.00, 0.10)

$('body').append(`<h1>${book.name}</h1>`)
$('body').append(`<h2>Price: R$${book.priceWithDiscount()}</h2>`)