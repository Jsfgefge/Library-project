let myLibrary = [];

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

function addBookToLibrary(book){
    myLibrary.push(book);
}

function getAllBooks(library){
    for (let i = 0; i < library.length; i++) {
        const element = library[i].info();
        console.log(element);
    }
}



const book1 = new Book("test1", "owo", "123",0);
const book2 = new Book("test2", "uwu", "12qwe3",0);
const book3 = new Book("test3", "awa", "12qwe3",0);
const book4 = new Book("test4", "ewe", "12qwe3",0);
const book5 = new Book("test5", "iwi", "12qwe3",0);
const book6 = new Book("test6", "unu", "1qwe23",0);
const book7 = new Book("test7", "DDD:", "1qwe23",0);



addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
addBookToLibrary(book4);
addBookToLibrary(book5);
addBookToLibrary(book6);
addBookToLibrary(book7);

getAllBooks(myLibrary);


// const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", "295 Pages",0);

// // console.log(theHobbit.author);
// console.log(theHobbit.info());
