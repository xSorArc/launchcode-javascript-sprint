// 18.5 EXERCISES: Classes
// Welcome to the space station! It is your first day onboard and as the newest and most junior member of the crew, you have been asked 
// to organize the library of manuals and fun novels for the crew to read. Headquarters have asked that you store the following 
// information about each book.
// -The title
// -The author
// -The copyright date
// -The ISBN
// -The number of pages
// -The number of times the book has been checked out.
// -Whether the book has been discarded.

// Headquarters also needs you to track certain actions that you must perform when books get out of date. First, for a manual, the book
// must be thrown out if it is over 5 years old. Second, for a novel, the book should be thrown out if it has been checked out over 100 
// times.

// 1. Construct three classes that hold the information needed by headquarters as properties. One class should be a Book class and two 
//    child classes of the Book class called Manual and Novel. Each class will contain two methods. One will be a constructor. The other 
//    one will either be in charge of disposal of the book or updating the property related to the number of times a book has been 
//    checked out. Hint: This means you need to read through the requirements for the problem and decide what should belong to Book and 
//    what should belong to the Novel and Manual classes.

class Book {
    constructor(title, author, copyDate, isbn, numPages, numTimesCheckedOut, isDiscarded = false) {
        this.title = title,
        this.author = author,
        this.copyDate = copyDate,
        this.isbn = isbn,
        this.numPages = numPages,
        this.numTimesCheckedOut = numTimesCheckedOut,
        this.isDiscarded = isDiscarded;
    }

    checkout(taken = 1) {
        this.numTimesCheckedOut += taken;
        return this.numTimesCheckedOut;
    }
}

// If over 5 years old, discard.
class Manual extends Book {
    constructor(title, author, copyDate, isbn, numPages, numTimesCheckedOut, isDiscarded = false) {
        super(title, author, copyDate, isbn, numPages, numTimesCheckedOut, isDiscarded);
    }

    throwAway(date) {
        if ((2022 - this.copyDate) > 5) {
            this.isDiscarded = true;
        }
        return this.isDiscarded;
    }
}

// If over 100 years old, discard.
class Novel extends Book {
    constructor(title, author, copyDate, isbn, numPages, numTimesCheckedOut, isDiscarded = false) {
        super(title, author, copyDate, isbn, numPages, numTimesCheckedOut, isDiscarded);
    }

    timesChecked() {
        if (this.numTimesCheckedOut > 100) {
            this.isDiscarded = true;
        }
        return this.isDiscarded;
    }
}

// 2. Declare an object of the Novel class for the following tome from the library:
let novel1 = new Novel("Pride and Prejudice", "Jane Austen", 1813, 1111111111111, 432, 32, false);

// 3. Declare an object of the Manual class for the following tome from the library:
let manual1 = new Manual("Top Secret Shuttle Building Manual", "Redacted", 2013, 0000000000000, 1147, 1, false);

// 4. One of the above books needs to be discarded. Call the appropriate method for that book to update the property. 
//    That way the crew can throw it into empty space to become debris.
console.log(manual1.throwAway());
// 5. The other book has been checked out 5 times since you first created the object. Call the appropriate method to update the number 
//    of times the book has been checked out.
console.log(novel1.checkout(5));