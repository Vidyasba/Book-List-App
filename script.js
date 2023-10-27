let books = [];

function showAddBookForm() {
  document.getElementById("addBookForm").style.display = "block";
}

function hideAddBookForm() {
  document.getElementById("addBookForm").style.display = "none";
}

function addBook() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const genre = document.getElementById("genre").value;
  const description = document.getElementById("description").value;
  const read = document.getElementById("read").checked;

  books.push({ title, author, genre, description, read });

  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("genre").value = "";
  document.getElementById("description").value = "";
  document.getElementById("read").checked = false;

  hideAddBookForm();
  renderBooks();
}

function renderBooks() {
  const bookList = document.getElementById("bookList");
  bookList.innerHTML = "";

  books.forEach((book, index) => {
    bookList.innerHTML += `
    <div class="book-item">
   
           <span class="book-title" onclick="showBookDetails(${index})">${
      book.title
    }</span>
    <button class="book-author" onclick="changeStatus(${index})">toggle</button>


            <span class="${book.read ? "read" : "unread"}">${
      book.read ? "Read" : "Unread"
    }</span>

    </div>
    
        `;
  });
}

function showBookDetails(index) {
  const book = books[index];
  alert(
    `Title: ${book.title}\nAuthor: ${book.author}\nGenre: ${
      book.genre
    }\nDescription: ${book.description}\nRead: ${book.read ? "Yes" : "No"}`
  );
}
function changeStatus(index) {
  if (books[index].read) {
    books[index].read = false; // If book was read, mark it as unread
  } else {
    books[index].read = true; // If book was unread, mark it as read
  }
  renderBooks(); // Call the renderBooks function to update the book list
}

renderBooks();
