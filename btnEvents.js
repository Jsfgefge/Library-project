let controlBooksId = [];
const btnDelete = document.querySelector("#btnDelete");
const btnNewBook = document.querySelector("#btnNewBook");
const btnAddBook = document.querySelector("#btnAddBook");
const library = document.querySelector(".library");

//#region    

//#region 



btnDelete.addEventListener("click", function(){
    const child = document.getElementById("book1");
    library.removeChild(child);
})