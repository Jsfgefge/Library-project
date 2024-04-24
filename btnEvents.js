let controlBooksId = [];
const btnDelete = document.querySelector("#btnDelete");
const btnNewBook = document.querySelector("#btnNewBook");
const btnAddBook = document.querySelector("#btnAddBook");
const library = document.querySelector(".library");


//#region    

//#region 


const function CreateBook(params) {
  const book = document.createElement("div");
  book.setAttribute("class","book");
}

btnDelete.addEventListener("click", function(){
    const child = document.getElementById("book1");
    library.removeChild(child);
})
