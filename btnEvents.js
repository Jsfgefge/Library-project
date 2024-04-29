
let controlBooksId = [];
let idCounter = 0;
let myLibrary = [];
let isReadValue;
// const btnDelete = document.querySelector("#btnDelete1");
const btnDelete = document.querySelector(".btnDelete");
const btnNewBook = document.querySelector("#btnNewBook");
const btnAddBook = document.querySelector("#btnAddBook");
const newBookForm = document.querySelector("#newBookForm");
const library = document.querySelector(".library");
const inputs = document.querySelector(".container.inputs")

const bookName = document.querySelector("#bookName");
const bookAuthor = document.querySelector("#bookAuthor");
const bookPages = document.querySelector("#bookPages");
const isRead = document.getElementsByName("isAvailable");

function HandleForm(event){
  event.preventDefault();
}
newBookForm.addEventListener("submit", HandleForm);

function GetIsReadValue() {
  for (let i = 0; i < isRead.length; i++) {
    if (isRead[i].checked) {
      isReadValue=parseInt(isRead[i].value);
    }
  }
};

function Book (title, author, pagesNo, isRead)     {
    this.title = title;
    this.author = author;
    this.pagesNo = pagesNo;
    this.isRead = isRead;


    // this.isRead = function(isRead){
    //     if(isRead === 1){
    //         return ("This book has been read");
    //     }else if(isRead === 0){
    //         return ("This book hasn't been read");
    //     }
    // };

    this.isReadValue = function(){
      if(this.isRead === 1){
        return ("This book has been read");
    }else if(this.isRead === 0){
        return ("This book hasn't been read");
    }
    }

    this.info = function(){
        return this.title+", "+this.author+", "+this.pagesNo+", "+this.isReadValue()
    };
};


function addBookToLibrary(Name, Author, Pages, isAvailable){
    let book = new Book(Name, Author, Pages, isAvailable)
    myLibrary.push(book);
};

function getAllBooks(library){
    for (let i = 0; i < library.length; i++) {
        const element = library[i].info();
    }
};

function CreateBook() {
  while(library.firstChild){
    library.removeChild(library.firstChild);
    idCounter = 0;
  }


  myLibrary.forEach(element => {
    //create book and add info
    const book = document.createElement("div");
    let bookInfoDiv = document.createElement("div");
    bookInfoDiv.classList.add("book-info");
    let bookBtnContainerDiv = document.createElement("div");
    bookBtnContainerDiv.classList.add("container");
    let titleText = document.createElement("p");
    let authorText = document.createElement("p");
    let pagesText = document.createElement("p");
    let isReadText = document.createElement("p");
    titleText.textContent = "Title:"+element.title;
    authorText.textContent = "Author:"+element.author;
    pagesText.textContent = "Number of Pages:"+element.pagesNo;
    isReadText.textContent = "isRead?:"+element.isReadValue();

    //add info to the book
    bookInfoDiv.appendChild(titleText);
    bookInfoDiv.appendChild(authorText);
    bookInfoDiv.appendChild(pagesText);
    bookInfoDiv.appendChild(isReadText);

    //create delete btn 
    let btnDelete = document.createElement("button");
    btnDelete.setAttribute("id", "btnDelete"+idCounter);
    btnDelete.classList.add("btnDelete");
    btnDelete.textContent = "Delete";
    btnDelete.addEventListener("click", function(e){
      let idNum = e.target.id.substring(9);
      
      const child = document.getElementById("book"+idNum);
      library.removeChild(child);
      
      myLibrary.splice(idNum,1);
    });
    
    //create toggle btn
    let btnToggleRead = document.createElement("button");
    btnToggleRead.setAttribute("id", "btnToggle"+idCounter);
    btnToggleRead.classList.add("btnToggle");

    if(element.isRead === 0){
      btnToggleRead.textContent = "Mark as read";
    }else if(element.isRead === 1){
      btnToggleRead.textContent = "Mark as not read";
    }

    btnToggleRead.addEventListener("click", function(e){
      let idNum = e.target.id.substring(9);

      let isReadText = document.querySelector('#book'+idNum+' .book-info').children[3];
      if(myLibrary[idNum].isRead === 0){
        btnToggleRead.textContent = "Mark as read";
        myLibrary[idNum].isRead = 1;
        isReadText.textContent = "isRead?:"+element.isReadValue();
      }else if(myLibrary[idNum].isRead === 1){
        btnToggleRead.textContent = "Mark as not read";
        myLibrary[idNum].isRead = 0;
        isReadText.textContent = "isRead?:"+element.isReadValue();
      }
    });
    
    book.appendChild(bookInfoDiv);
    book.appendChild(bookBtnContainerDiv);
    bookBtnContainerDiv.appendChild(btnDelete);
    bookBtnContainerDiv.appendChild(btnToggleRead);
    
    book.classList.add("book");
    book.setAttribute("id","book"+idCounter);
    
    library.appendChild(book);
    idCounter++;
  });
  
};


function ShowHideInputs(){
  if(inputs.style.display === "flex"){
    inputs.style.display="none"; 
  }else{
    inputs.style.display="flex"; 
  }
};
btnNewBook.addEventListener("click",ShowHideInputs);


btnAddBook.addEventListener("click",GetIsReadValue);
btnAddBook.addEventListener("click",function() {
  addBookToLibrary(bookName.value, bookAuthor.value, parseInt(bookPages.value), isReadValue);  
  getAllBooks(myLibrary);
});
btnAddBook.addEventListener("click",CreateBook);
btnAddBook.addEventListener("click",ShowHideInputs);
btnAddBook.addEventListener("click",function(){
  newBookForm.reset();
});