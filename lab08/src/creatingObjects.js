// ========================================
// ZADANIE 1
// ========================================

//  Zdefiniuj pola 'title' i 'author' i funkcję print(), która wypisze: author - title

const book0 = {
  title: "book0tittle",
  author: "book0author",
  print: function print(){
    console.log(this.author,"-",this.title)
  }
};


// book0.print();

const book1 = {
title: "book1tittle",
author: "book1author",
print: function print(){
  console.log(this.author,"-",this.title)
}
}

// book1.print();

const book2 = Object.create(book1);
book2.title = "book2tittle";
book2.author = "book2author";


// book2.print();

function BookCreator(title, author) {
  const b = {
    title: title,
    author: author,
    print: function print(){
      console.log(this.author,"-",this.title)
    }
  };
  return b;
}

const book3 = BookCreator("Cień wiatru", "Carlos Ruiz Zafon");
const book4 = BookCreator("Ojciech Chrzestny", "Mario Puzo");

// book3.print();
// book4.print();

// ========================================
// ZADANIE 2
// ========================================

// Przetestuj poniższy kod i odpowiedz na pytania

function testThis() {
  console.log(this);
}

// testThis();

function testThis2() {
  "use strict";
  console.log(this);
}

// testThis2();

// 2.1. Czym jest this? this to odnosnik to obiektu ktory zostal podany jako argument w funkcji
// 2.2. Do czego odwołuje się this w obu przypadkach do obiektu podanego jako argument w funkcji, use strict 

const person = {
  name: "Oscar Wilde",
  print(name = this.name) {
    console.log(this.name);

    function a() {
      console.log("a: ", name);
    }
    a();
  },
};
// person.print();

// 2.3. Jakie wartości przyjmuje this w powyższych przypadkach i dlaczego?
// 2.4. Zmodyfikuj powyższy kod w ten sposób, aby funkcja a wyświetlała w konsoli 'a: Oscar Wilde'. Nie używaj arrow function.

const printName = function () {
  console.log(this.name);
};

const person1 = {
  name: "Aaron Towels",
  print: printName
};

const person2 = {
  name: "Tom Clancy",
  print: printName
};
// 2.5. Za pomocą funkcji printName wypisz 'name' obu autorów. Nie zmieniaj implementacji funkcji printName!

// person1.print()
// person2.print()




const person3 = {
  name: "Arthur Conan Doyle",
  print() {
    const a = () => {
      console.log(this);
    };
    a();
  },
};
// person3.print();

// 2.6. Co wydrukuje w konsoli powyższy kod? Jaki scope ma arrow function? wiekszy od 'normalnie' zadeklarowanej funkcji

// ========================================
// ZADANIE 3
// ========================================

// Powróćmy do zadania 1.
// Dlaczego nasza funkcja BookCreator nie jest najlepszym rozwiązaniem do tworzenia obiektów? poniewaz jej scope jest zbyt "plytki"

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

// ========================================
// * ZADANIE 5
// ========================================

// Odwołaj się do zmiennej __proto__ w stworzonym obiekcie, co zawiera ta zmienna i do czego służy? 
// zawiera informacje o prototypie obiektu, nie dziala mi poprzednie zadanie, bo nie nie stworzylem prototypu, nie wiem jak to zrobic ale chociaz wiedzialem ze tutaj wyskoczy null :)
// console.log(book5.__proto__)