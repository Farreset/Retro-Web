import "./styles/app.css";

import Book from './models/Book.js';
import UI from './UI.js';

document.addEventListener('DOMContentLoaded', () => {
  const ui = new UI();
  ui.renderBooks();
});


document.getElementById('book-form')
  .addEventListener('submit', function(e) {


    const email = document.getElementById('email').value;


    const formData = new FormData();


    formData.append('email', email);
 
    // for(var pair of formData.entries()) {
    //   console.log(pair[0]+', '+pair[1]);
    // }

    // Instatiating the UI
    const ui = new UI();

    // New Book Object
    const book = new Book(email);

    // Validating User Input
    if ( email === '' ) {
      ui.renderMessage('Please fill all the fields', 'error', 3000);
    } else {
      // Pass the new book to the UI
      ui.addANewBook(formData);
      ui.renderMessage('User Added Successfully', 'success', 2000);
    }

    e.preventDefault();
  });

document.getElementById('books-cards')
  .addEventListener('click', e => {
    const ui = new UI();
    if (e.target.classList.contains('delete')) {
      ui.deleteBook(e.target.getAttribute('_id'));
      ui.renderMessage('User Deleted Successfully', 'success', 3000);
    }
    e.preventDefault();
  });
