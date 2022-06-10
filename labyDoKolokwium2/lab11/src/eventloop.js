'use strict';
// Zadanie 1.1. 
// Dopisz do pomiędzy deklaracją funkcji helloWorld a poleceniem console.log instrukcję wywołania helloWorld() tak, aby na ekranie pojawiło się jako pierwsze 'No, hello universe!'.
// Nie możesz dopisać nic za console.log()


// function helloWorld() {
//     console.log('Hello world!');
// }

// setTimeout(helloWorld,1)

// console.log('No, hello universe!');

// Zadanie 1.2. 
// Napisz funkcję, która wypisuje w konsoli 'Start!' i po dwóch sekundach wypisuje 'Koniec'.
// console.log("Start")
// setTimeout( () => {
//     console.log("Koniec")
// },2000)

// Zadanie 1.3. 
// Napisz funkcję, która wypisuje 'Welcome' co sekundę w nieskończoność.
// setInterval( () => {
//     console.log("Welcome")
// },1000)

// Zadanie 1.4. 
// Napisz funkcję, która wypisuje 'Welcome' co sekundę, ale tylko przez 5 sekund. 
// Podpowiedź: użyj clearInterval
function foo () {
    const welcome = setInterval( () => {
        console.log("Welcome")
    },1000)
    setTimeout( () => {
        clearInterval(welcome)
    },5000)
}
// foo()

// Zadanie 1.5. 
// Napisz funkcję, która przyjmuje trzy argumenty: funkcję i dwie liczby. Funkcja będzie wywołała podaną w argumencie funkcję co x sekund i automatycznie zatrzyma się po upływie y sekund. 
function fun(func, x, y) {
    const interval = setInterval(func,x*1000)
    setTimeout( () => {
        clearInterval(interval)
    },y*1000)
}
// fun(() => {console.log("welcome")}, 0.1,2)