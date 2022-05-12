// 1. Uprość funkcję BookCreator z poprzednich zajęć tak, aby zawierała tylko nadawanie wartości polom. (użyj operatora this) 
// Dodaj wywołanie słowa kluczowego new, przy wywołaniu BookCreator(). 

function BookCreator(title, author,readers = 0) {
    this.title = title;
    this.author = author;
    this.readers = readers
  }
  const book1 = new BookCreator("title", "author")
  console.log(book1)
// BookCreator jest konstruktorem, a je zawsze (ZAWSZE) deklarujemy zaczynając nazwę od wielkiej litery

// 1.1. Użyj zmiennej prototype, aby dodać funkcje print() i addReader() do tworzonych obiektów.
BookCreator.prototype.print = function print() {console.log(this.title+"-"+this.author+"-"+this.readers)}
BookCreator.prototype.addReader = function foo(el) {this.readers+=el}

// book1.print()
// book1.addReader(3)
// book1.print()



// 2. Tworzymy alternatywną wersję powyższego kodu. Użyj słów kluczowych class i constructor, aby osiągnąć powyższy efekt.

class Book{
    constructor(author, title,readers){
        this.title = title;
        this.author = author;
        this.readers = readers;
    }
    print() {console.log(this.title+"-"+this.author+"-"+this.readers)};

    addReader(el) {this.readers+=el}

}
const book2 = new Book("Jan Kowalski", "Matematyka", 0)
book2.print()
book2.addReader(5)
book2.print()

// 3. Znasz już wiele sposób na stworzenie obiektu. Dlaczego więc nie użyć arrow function?
// Uzupełnij poniższy kod o inicjalizację pola name i age. Dodaj wewnąrz funkcję addAge, która inkrementuje wiek. 

const Person = name => ({
    // inicjalizacja
})


// Przetestuj działanie tak stworzonego obiektu, korzystając z wiedzy, którą już masz. Jakie są róznice pomiędzy stworzeniem obiektu za pomocą poprzednich metod?
// (przetestuj prototype, new itd.)