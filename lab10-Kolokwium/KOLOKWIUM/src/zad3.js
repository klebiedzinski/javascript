
// Stwórz funkcję `getCounter`, która jako parametr przyjmuje dwie wartości - `min` i `max`. Funkcja powinna zwrócić funkcję,
// która przy każdym wywołaniu zwraca liczbę o 1 większą niż poprzednio zwrócona począwszy od podanej wartości minimalnej, a kończąc na maksymalnej.

// Uwaga! Rozwiązanie tego zadania nie może używać zmiennych globalnych!

// Przykład działania:

// Wywołujemy funkcje `getCounter` z wartościami `(5, 7)`.

// Wywołujemy zwracaną przez `getCounter` funkcje, która daje output kolejno:
// Pierwsze wywołanie -> output: 5
// Drugie wywołanie -> output: 6
// Trzecie wywołanie -> output: 7
// Czwarte wywołanie -> output: undefined


function getCounter(min,max) {
    let count = min
    console.log(count)
   return () => (count < max ? ++count : undefined)

}
const a = getCounter(5,7)
console.log(a())
console.log(a())
console.log(a())
console.log(a())

