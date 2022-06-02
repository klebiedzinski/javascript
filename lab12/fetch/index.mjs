'use strict';
import fetch from "node-fetch";
/* 
Zadanie 1.1
Za pomocą funkcji fetch wykonaj zapytanie metodą GET pod następujący url: https://jsonplaceholder.typicode.com/posts
Jako pierwszy callback - sprawdź, czy response jest poprawny (status równy 200). Jeśli tak, to zwróć response, w przeciwnym wypadku wypisz błąd w konsoli.
Jako następny callback - użyj destrukcji obiektów, aby wypisać w konsoli zmienną 'data' i 'headers'.
*/

fetch("https://jsonplaceholder.typicode.com/posts")
.then((res) => {
    if (res.status === 200) res.json()
    .then( res => console.log(res))
    else console.log("błąd")
})






/* 
Zadanie 1.2 
Stwórz funkcję, która przyjmuje jako parametr obiekt takiej postaci:
{
    idUser: (pole typu int)
    title: (pole typu string)
    completed: (pole typu boolean)
}

Następnie wysyła taki obiekt za pomocą funkcji fetch pod url: https://jsonplaceholder.typicode.com/todos
Jeśli dodanie zakończy się sukcesem - wyświetli w konsoli komunikat 'Dodano' i wyświetli id dodanego obiektu. W przeciwnym wypadku wypisze błąd.
*/

const a = {
    idUser: 12,
    title: "strigus",
    completed: true
}
fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "post",
    headers: {
        'Content-type' : 'application/json'
    },
    body: JSON.stringify(a)

})
.then((el) => console.log("dodano"))
.catch((el) => console.log("błąd"))