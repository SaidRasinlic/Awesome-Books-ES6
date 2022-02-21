const bookList = document.querySelector('.book-list');

export default class Book {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
  }

  addBook = () => {
    Book.books.push(this);
    localStorage.setItem('bookInfo', JSON.stringify(Book.books));
    Book.displayUI();
  }

  removeBook = () => {
    const removeBookID = parseInt(this.id, 10);
    let listSection = Book.books;
    listSection = listSection.filter((element, index) => index !== removeBookID);
    Book.books = listSection;
    localStorage.setItem('bookInfo', JSON.stringify(listSection));
    window.location.reload();
  }

  static displayUI = () => {
    let bookDIV = '';
    Book.books = JSON.parse(localStorage.getItem('bookInfo'));
    if (Book.books === null) {
      Book.books = [];
    }
    Book.books.forEach((item, index) => {
      bookDIV += `<div class="bookDIV">
    <p class='button-info'>"${item.title}" by "${item.author}"</p>
    <button type="button" class="remove-btn" id="${index}">Remove</button>
    </div>`;
    });
    bookList.innerHTML = bookDIV;
  }
}
