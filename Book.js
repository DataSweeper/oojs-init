var Book = (function () {
	//private static field
	var numOfBooks = 0;
	
	//private static method
	function checkIsbn(isbn) {
		if (isbn.length != 10 && isbn.length != 13)
			//throw new Error("isbn is not valid.");
			 throw new Error("isbn is not valid!");
	}

	// private static method constructor also
	function Book(isbn, title) {

		checkIsbn(isbn);
		this.isbn = isbn;
		this.title = title;
	 	numOfBooks++;
		this.getNumOfBooks = function () {
			return numOfBooks;
		}
	}
	return Book;
})();

var firstBook = new Book("0-943396-04-2", "First Title");

console.log(firstBook.title);
console.log(firstBook.getNumOfBooks());

var secondBook = new Book("0-85131-041-9", "Second Title");

console.log(firstBook.title);
console.log(secondBook.title);
console.log(firstBook.getNumOfBooks());
console.log(secondBook.getNumOfBooks());
