'use strict';

// Poniższe fragmenty kodu zostały zakomentowane w celu utrzymania porządku. 
// Odkomentowuj je na bieżąco i zapisuj odpowiedzi w komentarzu. 
// Ostatecznie przed wrzuceniem pliku na repozytorium zakomentowane powinny być tylko dodane odpowiedzi i fragmenty kodu powodujące ewentualne błędy.

// ========================= Zadanie 1 =========================
// Co zwróci funkcja poniższa funkcja w każdym z poniższych przypadków?
// Wyjaśnij, dlaczego w niektórych przypadkach wyniki różnią się.

// ========================== UWAGA =============================
// Zapis 
// (impression) ? console.log('A') : console.log('B');
// Jest skróconą wersją:
// if (impression) {
//     console.log('A');
// } else {
//     console.log('B');
// }
// ==============================================================

function isEquals(val_1, val_2) {
    (val_1 == val_2) ? console.log('A') : console.log('B');
    (val_1 === val_2) ? console.log('C') : console.log('D');
}

// isEquals(2, '2');
// isEquals(null, undefined);
// isEquals(undefined, NaN);
// isEquals(['a', 'b', 'c'], ['b', 'c', 'd']);
// isEquals(0, '');
// isEquals('0', '');
// isEquals(+0, -0);
// isEquals(0, false);
// isEquals(0, 'false');
// isEquals([1, 2], '1,2');

!!false;
!!true;
!!undefined;
!!null;

// ========================= Zadanie 2 =========================
// Jaki będzie efekt działania poniższego fragmentu kodu?
// Wyjaśnij wynik

const person = {
    firstName: 'Jan',
    lastName: 'Kowalski'
}

// console.log(person); // 
// person = {}; //
// console.log(person); // nie mozna edytowac stalych

// ========================= Zadanie 3 =========================
// Co zostanie wyświetlone na ekranie?
// Wyjaśnij wynik

// let number = 3;
// console.log(number); {
//     let number = 4;
//     console.log(number);
// }                                   // w nawiasach klamrowych nadpisuje zmienna number 'tylko dla siebie' i potem wychodzac z nawiasow klamrowych nie widzimy zadnych zmian
// console.log(number);

// ========================= Zadanie 4 =========================
// Czym się różnią poniższe dwa fragmenty kodu?
// Jak działa operator '...'?

const arr = [1, 2];
const newArr1 = [arr, 3, 4];
console.log(newArr1);  // [[1,2],3,4]
const newArr2 = [...arr, 3, 4]; 
console.log(newArr2); // [1,2,3,4]

// Co zostanie wyświetlone na ekranie?
// Wyjaśnij wynik

const word = 'javascript';
const arrWord = [...word];
console.log(arrWord); //[j,a,v,a,s,c,r,i,p,t]

// ========================= Zadanie 5 =========================
// Zapoznaj się z kodem poniżej. Jaki będzie jego wynik i dlaczego?

// var hello = 'Hello world!';
// var result = hello / 2;

// result;

// console.log(Number.isNaN(result));
// console.log(Number.isNaN(hello));
// console.log(hello,result);            

// ========================= Zadanie 6 =========================
// Zapoznaj się z przykładami poniżej. Jaka jest różnica między var a let/const?

// var car = 'BMW';

// function showCar() {
//     var car = 'Audi';
//    var model = 'A5'; 
//     console.log('Great car!');
// }

// showCar();

// console.log(car); // voidowa funkcja zmienila wartosc car
// console.log(model); // nie jest zdefiniowana poza funkcja wiec nie outputuje

// -------

// var name = 'Bryan';

// (function differentName() {
//     var name = 'Adam';
//     // console.log(name);
// })();

// console.log(name);

// -------

// if (true) {
//     var a = 2;
// }
// console.log(a);
// const b = 3
// if (true) {
//       const b = 2;
//     console.log(b);
// }
// console.log(b);   //<--- const i let dzialaja tylko w klamrowych w ktoych sa zadeklarowane i nizej

// -------

// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }
// console.log(i);

// for (let i = 0; i < 10; i++) {     
//     console.log(i);
// }
// console.log(i);              // const i let jest tylko w petli poza nia nie jest zadeklarowany

// -------

// var test = "var1";
// var test = "var2";

// let test2 = "let1";
// let test2 = "let2";     //Cannot REDECLARE block-scoped variable 'test2'.  <-- nie mozna zmieniac wartosci let i const
// const test3="hello"
// const test3 = "hi"
// ========================= Zadanie 7 =========================
// Do czego używany jest 'use strict' w pierwszej linijce skryptu?

// do pisania bezpiecznego kodu,
// przez to ze js jest tak "gumowy", kompiluje czasem rzeczy ktore nie powinny dzialac,
// powinnismy deklarowac zmienne i wartosci, use strict tego pilnuje