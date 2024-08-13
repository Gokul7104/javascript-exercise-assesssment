// Using variables to represent a book

var bookTitle;
var bookAuthor;

bookTitle = "The Hobbit";
bookAuthor = "J. R. R. Tolkien";

console.log(bookTitle + " by " + bookAuthor);



/* Further Adventures
 *
 * 1) Declare variables for a second book
 *    and assign them values.
 *
 * 2) Add code to log its details to the console.
 *
 * 3) Repeat steps 1 and 2 for a third book.
 *
 * 4) Consider the code needed for 10 books.
 *    For 100 books.
 *
 */

//answer//
// Using variables to represent a book
var book1Title;
var book1Author;
book1Title = "The Hobbit";
book1Author = "J. R. R. Tolkien";
console.log(book1Title + " by " + book1Author);

// Second book
var book2Title;
var book2Author;
book2Title = "To Kill a Mockingbird";
book2Author = "Harper Lee";
console.log(book2Title + " by " + book2Author);

// Third book
var book3Title;
var book3Author;
book3Title = "1984";
book3Author = "George Orwell";
console.log(book3Title + " by " + book3Author);
var books = [{ title: "The Hobbit", author: "J. R. R. Tolkien" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
    { title: "1984", author: "George Orwell" }];
  for (var i = 0; i < books.length; i++) {
    console.log(books[i].title + " by " + books[i].author);
  }