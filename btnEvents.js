let controlBooksId = [];
let idCounter = 0;
let myLibrary = [];
const btnDelete = document.querySelector("#btnDelete");
const btnNewBook = document.querySelector("#btnNewBook");
const btnAddBook = document.querySelector("#btnAddBook");
const library = document.querySelector(".library");
const inputs = document.querySelector(".container.inputs")

const bookName = document.querySelector("#bookName");
const bookAuthor = document.querySelector("#bookAuthor");
const bookPages = document.querySelector("#bookPages");
const bookSynopsis = document.querySelector("#bookSynopsis");
// const isAvailible = document.querySelector("#isAvailible");


function Book (title, author, pagesNo, isRead)     {
    this.title = title;
    this.author = author;
    this.pagesNo = pagesNo;
    this.isRead = function(isRead){
        if(isRead === 1){
            return ("This book has been read");
        }else if(isRead === 0){
            return ("This book hasn't been read");
        }
    };

    this.info = function(){
        return this.title+", "+this.author+", "+this.pagesNo+", "+this.isRead(isRead)
    };

}

function addBookToLibrary(Name, Author, Pages, isAvailible){
    let book = new Book(Name, Author, Pages, isAvailible)
    myLibrary.push(book);
}

function getAllBooks(library){
    for (let i = 0; i < library.length; i++) {
        const element = library[i].info();
        console.log(element);
    }
}

function ShowHideInputs(){
  if(inputs.style.display === "flex"){
    inputs.style.display="none"; 
  }else{
    inputs.style.display="flex"; 
  }
}
btnNewBook.addEventListener("click",ShowHideInputs);

function CreateBook() {
  const book = document.createElement("div");
  book.classList.add("book");
  book.setAttribute("id","book"+idCounter);
  library.appendChild(book);
}
btnAddBook.addEventListener("click",CreateBook);
btnAddBook.addEventListener("click",ShowHideInputs);
btnAddBook.addEventListener("click",test);

// btnAddBook.addEventListener("click",function() {
//   const book = document.createElement("div");
//   book.classList.add("book");
//   book.setAttribute("id","book"+idCounter);
//   library.appendChild(book);
//   console.log("this works");
// });

btnDelete.addEventListener("click", function(){
    const child = document.getElementById("book1");
    library.removeChild(child);
})
