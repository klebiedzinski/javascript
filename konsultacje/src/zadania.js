
const book1 = {
    title1: "Mistrz i Małgorzata",
    author1: "Michaił Bułhakow",
  };
  
  const { 
    title1 = "-", 
    author1 = "-", 
    year1 = 1967 
  } = book1;                          
  
  console.log(title1);
  console.log(author1);
  console.log(year1);
// Mistrz i Małgorzata
// Michaił Bułhakow
// 1967    
// Dlaczego??





// Zmodyfikuj funkcję BookCreator tak, aby inicjalizowała pola author i title.
function BetterBookCreator(title, author) {
    const b = {
      title: title,
      author: author,
      print: function print(){
        console.log(this.author,"-",this.title)
      },
      readers: 0,
      addReader: function foo(el) {this.readers+=el}
    };
    return b;
  };
  const book5 = BetterBookCreator("Lalka", "Bolesław Prus");
  // book5.print()
  book5.addReader(1);
  book5.addReader(1);
  // console.log(book5.readers)
  // book5.hasOwnPropety('isBestseller')
  
  // Funkcję print zadeklaruj jako wspólną dla wszystkich obiektów tworzonych przez BookCreator.
  // Dopisz do tworzonych obiektów pole readers, które będzie zawierało liczbę czytelników.
  // Zadeklaruj funkcję addReader, która inkrementuje pole readers. addReader powinna być funkcją wspólną, tak jak print.
  
  // ========================================
  // * ZADANIE 4
  // ========================================
  
  // Na stworzonym obiekcie wywołaj funkcję hasOwnProperty('isBestseller').
  // ========================================
  // Napisz dlaczego nasz obiekt ma do niej dostęp. (jeśli wyskakuje błąd - powróć do poprzedniego zadania)


  // 3. Znasz już wiele sposób na stworzenie obiektu. Dlaczego więc nie użyć arrow function?
  // Uzupełnij poniższy kod o inicjalizację pola name i age. Dodaj wewnąrz funkcję addAge, która inkrementuje wiek. 

  const Person = name => ({
    
  })



//   Zdefiniuj klasę Fraction zawierającą pola numerator i denumerator (mianownik i licznik), konstruktor oraz metody multiplyBy, multiply i print dającymi następujące efekty:
// u.multiplyBy(v) ma powodować, że u staje się iloczynem ułamków u i v
// u.multiplyBy(i) ma powodować, że u staje się iloczynem ułamka u i liczby (dodatniej całkowitej)
// metoda multiply(x, y) mająca dawać jako wynik nowy ułamek będący iloczynem ułamków x i y




// 1.4.
// Stwórz obiekt za pomocą funkcji CreateMovie (zawierający klucze bez wartości: director, title, year) wykorzystując słówko `this`.
// Jeśli przy tworzeniu obiektu rok nie zostanie podany powinien przyjmować wartość "unknown".

function CreateMovie(director, title, year="unknown"){
  this.director = director;  // error
  this.title = title;
  this.year =  year
}
CreateMovie.prototype.isOlder = (year) => {
   return year > 2000;
}
CreateMovie.prototype.print = () => {
   console.log(this.director+": "+this.title+"("+this.year+")")
}