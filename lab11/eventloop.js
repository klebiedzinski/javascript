'use strict';

const { mainModule } = require("process");

// Zadanie 1.1. 
// Dopisz do pomiędzy deklaracją funkcji helloWorld,
// a poleceniem console.log instrukcję wywołania helloWorld() tak
//, aby na ekranie pojawiło się jako pierwsze 'No, hello universe!'.
// Nie możesz dopisać nic za console.log()


function helloWorld() {
    console.log('Hello world!');
}

setTimeout(helloWorld,0)

console.log('No, hello universe!');


// Zadanie 1.2. 
// Napisz funkcję, która wypisuje w konsoli 'Start!' 
//i po dwóch sekundach wypisuje 'Koniec'.
function foo () {
    console.log("Start")
    setTimeout(() => console.log("stop"), 2000)
}
// foo()

// Zadanie 1.3. 
// Napisz funkcję, która wypisuje 'Welcome' co sekundę w nieskończoność.

function foo2() {
    setInterval( () => console.log("Welcome"), 1000)
}

// foo2()

// Zadanie 1.4. 
// Napisz funkcję, która wypisuje 'Welcome' co sekundę, ale tylko przez 5 sekund. 
// Podpowiedź: użyj clearInterval

function foo3() {
   const timer =  setInterval( () => console.log("Welcome"), 1000)

   setTimeout(() => clearTimeout(timer),5000)
}
// foo3()
// Zadanie 1.5. 
// Napisz funkcję, która przyjmuje trzy argumenty: 
//funkcję i dwie liczby.
// Funkcja będzie wywołała podaną w argumencie funkcję co x 
//sekund i automatycznie zatrzyma się po upływie y sekund. 


function foo5(foo,x,y){
    const a = setInterval(foo,x*1000)
    setTimeout(() => clearTimeout(a),y*1000)
}

function druk(){
    console.log(".")
}

// foo5(druk,0.2,100000)
