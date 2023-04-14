console.log("Hello World!\n==========\n");

// PROJECT Section
console.log("PROJECT:\n==========\n");

const books = [
    {
        id: 1,
        title: "Name of the Wind",
        author: "Patrick Rothfuss",
        read: true,
    },
];

class Book {
    constructor(id, title, author, read) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.read = read;
    }
}

class Library {
    constructor(books) {
        this.nextId = books.length;
        this.books = books;
    }

    addBook(book) {
        if (!book) {
         var title = document.getElementById("title");
         var author = document.getElementsById("author");
         var read = document.getElementById("read");

        this.nextId++;

        
        var newBook = new Book(
            this.nextId, 
            title.value, 
            author.value, 
            read.checked
            );
    
this.books.push(newBook);
    }
       
        const tbody = document.getElementById('tableBody');
        const newTr = document.createElement("tr");
        newTr.classList.add(book ? book.id : newBook.id);
        newTr.addEventListener("dblclick", () => {
        this.removeBook(book ? book.id : newBook.id);
        });
        const newTitle = document.createElement("td");
        const newAuthor = document.createElement("td");
        const newRead = document.createElement("td");

        newTitle.textContent = book ? book.title : newBook.title;
        newAuthor.textContent = book ? book.author : newBook.author;
        const newCheckbox = document.createElement("input");
        newCheckbox.classList.add(book ? book.id : newBook.id);
        newCheckbox.type = "checkbox";
        newCheckbox.checked = book ? book.read : read.checked;
        newCheckbox.disabled = book ? book.read : read.checked;
        newCheckbox.addEventListener("click", (event) => {
        this.markRead(event.target, book ? book.id : newBook.id);
      });
        newRead.appendChild(newCheckbox);

        newTr.appendChild(newTitle); 
        newTr.appendChild(newAuthor);
        newTr.appendChild(newRead);
        tbody.appendChild(newTr);
    }
    markRead(checkbox, id) {
     this.books.forEach((book) => {
        if (id === book.id) {
            book.read = true;
            checkbox.disabled = true;
        }
     });
    }

    removeBook(bookId) {
     this.books = this.books.filter(({ id }) => bookId !== id);
     const tbody = document.getElementById("tableBody");
     tbody.removeChild(document.getElementsByClassName(bookId)[0]);
    }
}
const library = new Library(books);
if (books.length> 0) {
library.books.forEach((book) => {
    library.addBook(book);
});
}

const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    library.addBook();
});