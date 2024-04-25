let controlBooksId = [];
let idCounter = 0;
const btnDelete = document.querySelector("#btnDelete");
const btnNewBook = document.querySelector("#btnNewBook");
const btnAddBook = document.querySelector("#btnAddBook");
const library = document.querySelector(".library");


//#region    

//#region 


function CreateBook() {
  const book = document.createElement("div");
  book.classList.add("book");
  book.setAttribute("id","book"+idCounter);
  library.appendChild(book);
  idCounter++;
}

btnNewBook.addEventListener("click",CreateBook);

btnDelete.addEventListener("click", function(){
    const child = document.getElementById("book1");
    child.remove();
})
