
let myLibrary = [];

class Book {
    constructor(title, author, pages,read) {
    this.title = title
    this.author = author
    this.pages = parseInt(pages)
    this.read = read

    this.info = function() {
        return(`${title} by ${author}, ${pages} pages,${read}`);
    }
}
}


// adding Books through userinput 
const container = document.querySelector(".bookshelve");

const submitBtn = document.querySelector("#submit")


submitBtn.addEventListener("click", function() {
        let title = document.querySelector("#title").value;
        let author = document.querySelector("#author").value;
        let pages = document.querySelector("#pages").value;
        let read = document.querySelector("#checkbox").value;
        if (read === "on") {
            read = "Read"
        }
        else {
            read = "Reading"
        };

        const book = new Book(title, author, pages, read);
        myLibrary.push(book);
        const div = document.createElement("div");
        div.classList.add("book-item");
        container.appendChild(div);
        const book_title = document.createElement("div")
        book_title.classList.add("bookTitle");
        book_title.innerText = title;
        const book_author = document.createElement("div")
        book_author.classList.add("bookAuthor");
        book_author.innerText = author;
        const book_pages = document.createElement("div")
        book_pages.classList.add("bookPages");
        book_pages.innerText = pages;
        const book_status = document.createElement("button")
        book_pages.classList.add("bookStatus");
        if (read === "on") {
            book_status.innerText = "Read"
        }
        else {
            book_status.innerText = "Reading"
        };
        const book_remove = document.createElement("button")
        book_remove.classList.add("bookRemove");
        book_remove.innerText = "Remove";
        div.appendChild(book_title); 
        div.appendChild(book_author); 
        div.appendChild(book_pages); 
        div.appendChild(book_status);
        div.appendChild(book_remove);
        closeModal(modal)
})




const removeBtn = document.querySelector(".bookRemove");




// Modal functionality

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest(".modal")
        closeModal(modal)
    })
})

overlay.addEventListener("click", () => {
    const modals = document.querySelectorAll(".modal.active")
    modals.forEach(modal => {
        closeModal(modal)
    })
})

openModalButtons.forEach(button => {
    button.addEventListener("click", () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})


function openModal(modal) {
    if (modal == null) return
    modal.classList.add("active")
    overlay.classList.add("active")
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove("active")
    overlay.classList.remove("active")
}