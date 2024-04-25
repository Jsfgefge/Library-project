let controlBooksId = [];
let idCounter = 0;

let bookName = "";
let bookAuthor = "";
let bookPages = 0;
let bookSynopsis = "";
let isAvailable = false;


const btnDelete = document.querySelector("#btnDelete");
const btnNewBook = document.querySelector("#btnNewBook");
const btnAddBook = document.querySelector("#btnAddBook");
const library = document.querySelector(".library");




function CreateBook() {
  const book = document.createElement("div");
  book.classList.add("book");
  book.setAttribute("id","book"+idCounter);
  library.appendChild(book);
  idCounter++;
}

function showInputs(){
  const inputs = document.getElementById("form");
  if(inputs.style.display === "none"){
    inputs.style.display = "flex";
  }else{
    inputs.style.display = "none";
  }
}

function test(Name, Author, Pages, Synopsis, Read){
  console.log(Name, Author, Pages, Synopsis, Read);
}

btnNewBook.addEventListener("click", showInputs);

btnAddBook.addEventListener("click", CreateBook);
btnAddBook.addEventListener("click", showInputs);
btnAddBook.addEventListener("click", test(bookName, bookAuthor, bookPages, bookSynopsis, isAvailable));



btnDelete.addEventListener("click", function(){
    const child = document.getElementById("book1");
    child.remove();
})
