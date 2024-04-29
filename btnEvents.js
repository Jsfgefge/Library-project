let controlBooksId = [];
let idCounter = 0;
let myLibrary = [];
let isReadValue;
const btnDelete = document.querySelector("#btnDelete");
const btnNewBook = document.querySelector("#btnNewBook");
const btnAddBook = document.querySelector("#btnAddBook");
const library = document.querySelector(".library");
const inputs = document.querySelector(".container.inputs")

const bookName = document.querySelector("#bookName");
const bookAuthor = document.querySelector("#bookAuthor");
const bookPages = document.querySelector("#bookPages");
const isRead = document.getElementsByName("isAvailable");

function GetIsReadValue() {
  for (let i = 0; i < isRead.length; i++) {
    if (isRead[i].checked) {
      isReadValue=parseInt(isRead[i].value);
    }
  }
  console.log(isReadValue);
}

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

function CreateBook() {
  const book = document.createElement("div");
  book.classList.add("book");
  book.setAttribute("id","book"+idCounter);
  library.appendChild(book);
}

function ShowHideInputs(){
  if(inputs.style.display === "flex"){
    inputs.style.display="none"; 
  }else{
    inputs.style.display="flex"; 
  }
}
btnNewBook.addEventListener("click",ShowHideInputs);

btnAddBook.addEventListener("click",CreateBook);
btnAddBook.addEventListener("click",ShowHideInputs);
btnAddBook.addEventListener("click",GetIsReadValue);

btnAddBook.addEventListener("click",function() {
  addBookToLibrary(bookName.value, bookAuthor.value, bookPages.value, isReadValue);  
  getAllBooks(myLibrary);
})

btnDelete.addEventListener("click", function(){
    const child = document.getElementById("book1");
    library.removeChild(child);
})
