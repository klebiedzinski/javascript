'use strict';

// Zadanie 2.1. 
// Stwórz obiekt klasy Promise -> niech zakończy się powodzeniem (resolve) po 5 sekundach i zwróci string 'Udało się!'. 
// Jako callback niech wypisze zwrócony string w konsoli.




// Zadanie 2.2.
// Zmodyfikuj powyższy kod tak, aby zamiast z sukcesem - promise zakończył się porażką i zwracał string 'Porażka'.
// Skorzystaj z then() aby obsłużyć błąd.

// const promise2 = new Promise((resolve,reject) => {
//     reject("Porażka")
//     .then((str) => {console.log(str)})
// })

// Zadanie 2.3.
// Zamiast then(), zmodyfikuj powyższy kod używając catch()

// Zadanie 2.4. 
// Napisz funkcję multiplyAsync(x,y), która zwraca obiekt klasy Promise, kończący się porażką, gdy któryś za argumentów jest niepoprawny (nie jest liczbą).
// W przeciwnym przypadku zwraca iloczyn dwóch liczb. Napisz callback, który wypisuje wynik w konsoli.

function multiplyAsync(x,y) {
    const promise = new Promise((resolve,reject) => {
        if (typeof x === 'number' && typeof y === 'number') resolve(x*y)
        else reject("Porażka")
        
        
    })
    return promise
}
multiplyAsync(10,2)
.then((res) => console.log(res))
.catch((res) => console.log(res))