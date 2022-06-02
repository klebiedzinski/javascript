// // **Zadanie 1** 

// // W pliku [books.js](/books.js) znajduje się tablica książek. Posegreguj podane książki względem gatunku.
// // Jeśli książka posiada więcej gatunków niż jeden, powinna znaleźć się pod każdym z tych gatunków.
// // Dodatkowo usuń wszystkie pola oprócz tytułu i autora. Zadanie rozwiąż uzupełniając poniższy kod, tak aby otrzymać poniżej zaprezentowany wynik.
// // Pamiętaj, aby używać *wyłącznie* funkcji wbudowanych klasy Array (oprócz funkcji `.forEach()`), `for` i `foreach` zdecydowanie odpada ;)

// ```
// const books = require('./books.js');

// const result = books.booksArray.reduce(
//     // Uzupełnij
// ) 

// console.log (result);
// ```

// ```
// // Postać oczekiwanego wyniku
// {
//     'fantasy': [
//         { title: 'Lord of the Rings', author: 'J.R.R. Tolkien' },
//         { title: 'Harry Potter', author: 'J.K. Rowling' },
//         ...
//     ],
//     'fiction': [
//         { title: 'The Borthers Karamazov', author: 'Fyodor Dostoyevsky' },
//         ...
//     ],
//     ...
// }
// ```

const books = require('./books.js');


const help = books.booksArray.reduce((result,element,index) => {
    if (typeof element.genre === 'string')  result.push(element);
    else {
        // title: 'Lord of the Rings',
        // author: 'J.R.R. Tolkien',
        // genre: 'fantasy',
        // readers: 20043,
        const a ={
            title: element.title,
            author: element.author,
            genre: element.genre[0],
            readers: element.readers
        }
        const b={
            title: element.title,
            author: element.author,
            genre: element.genre[1],
            readers: element.readers
        }
       result.push(a);
       result.push(b);
    }
    
    return result
},[])
// console.log(help)

const result = help.reduce((object,element,) => {
    const { genre } = element;
    object[genre] = object[genre] ?? [];
    let a ={
        title: element.title,
        author: element.author
        
    }
    object[genre].push(a);
    return object;
},{});

console.log (result);
