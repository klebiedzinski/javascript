'use strict';

/* 
Zadanie 1.1

Stwórz projekt i dołącz do niego bibliotekę axios.

Następnie wykonaj zapytanie metodą GET za pomocą dodanej biblioteki pod następujący url: https://jsonplaceholder.typicode.com/posts
Jako pierwszy callback - sprawdź, czy response jest poprawny (status równy 200). Jeśli tak, to zwróć response,
w przeciwnym wypadku wypisz błąd w konsoli.
Jako następny callback - użyj destrukcji obiektów, aby wypisać w konsoli zmienną 'data' i 'headers'.
*/
const axios = require('axios').default;
const posts = axios.get("https://jsonplaceholder.typicode.com/posts")
.then( (response) => {
    console.log(response) 
    
})
.catch( (error) => console.log("błąd:",error))

/* 
Zadanie 1.2 
Stwórz funkcję, która przyjmuje jako parametr obiekt takiej postaci:
{
    idUser: (pole typu int)
    title: (pole typu string)
    completed: (pole typu boolean)
}

Następnie wysyła taki obiekt za pomocą funkcji post z biblioteki axios pod url: https://jsonplaceholder.typicode.com/todos
Jeśli dodanie zakończy się sukcesem - wyświetli w konsoli komunikat 'Dodano' i wyświetli id dodanego obiektu. W przeciwnym wypadku wypisze błąd.
*/
const object = {
    idUser: 12,
    title: "Title",
    completed: false
}
function post(object) {
    axios({
        method: 'post',
        url: "https://jsonplaceholder.typicode.com/todos",
        data: object

    })
    .then( () => console.log("dodano obiekt, id:",object.idUser))
    .catch(() => console.log("błąd"))
}
post(object)