/***
 * DOM Selection
 * Event listener
 * Basic Validation
 * Creating element
 * Append
 */

/** DOM Selection */
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const year = document.querySelector('#year');
const btn = document.querySelector('.btn');
const bookList = document.querySelector('#book-list');

/** Event listener */
btn.addEventListener('click', function(e) {
    e.preventDefault();


    /** validation */
    if (title.value == '' || year.value == '' || author.value == '') {
        alert('bhai box khali ken?');
    } else {

        /** creating element && append */
        const newRow = document.createElement('tr');
        bookList.appendChild(newRow);

        //title
        const newTitle = document.createElement('th');
        newTitle.innerHTML = title.value;
        newRow.appendChild(newTitle);

        //author
        const newAuthor = document.createElement('th');
        newAuthor.innerHTML = author.value;
        newRow.appendChild(newAuthor);

        //year
        const newYear = document.createElement('th');
        newYear.innerHTML = year.value;
        newRow.appendChild(newYear);

    }
});