'use strict';

import fetch from "node-fetch";
/* 
Zadanie 1.1
Za pomocą funkcji fetch wykonaj zapytanie metodą GET pod następujący url: https://jsonplaceholder.typicode.com/posts
Jako pierwszy callback - sprawdź, czy response jest poprawny (status równy 200). Jeśli tak, to zwróć response, w przeciwnym wypadku wypisz błąd w konsoli.
Jako następny callback - użyj destrukcji obiektów, aby wypisać w konsoli zmienną 'data' i 'headers'.
*/
fetch('https://jsonplaceholder.typicode.com/posts')
.then( (res) => {
    if(res.status===200) return res//data i headers jest w res a kolejny callback dajemy tylko gdy damy res.json() 
    else throw ("błąd")
})

.then( (response) => {
    const {body: data, headers} = response
    // console.log(data)
    // console.log(headers)

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

function postUser(user){
    fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(() => console.log("Dodano, id:"+user.idUser))
    .catch(() => console.log("błąd"))
}

const user = {
    idUser: 2,
    title: "title",
    completed: true
}

postUser(user)
