'use strict';
const axios = require('axios')
/* 
Zadanie 1.1

Stwórz projekt i dołącz do niego bibliotekę axios.

Następnie wykonaj zapytanie metodą GET za pomocą dodanej biblioteki pod następujący url: https://jsonplaceholder.typicode.com/posts
Jako pierwszy callback - sprawdź, czy response jest poprawny (status równy 200). Jeśli tak, to zwróć response, w przeciwnym wypadku wypisz błąd w konsoli.
Jako następny callback - użyj destrukcji obiektów, aby wypisać w konsoli zmienną 'data' i 'headers'.
*/
axios.get("https://jsonplaceholder.typicode.com/posts")
.then((res) => {
    
   if (res.status === 200) return res;
    else throw "błąd"                       
})
.then((res) => {
   const {data, headers} = res
//    console.log(headers)
//    console.log(data)
})
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
const user = {
    idUser: 12,
    title: "true",
    completed: false
}
function postUser(){
    axios.post("https://jsonplaceholder.typicode.com/todos", user)
        .then((el) => console.log("Dodano: " +el.data.idUser))
        .catch(() => {throw "bład"})
}
postUser(user)


