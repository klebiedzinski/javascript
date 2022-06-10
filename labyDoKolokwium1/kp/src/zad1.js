// W pliku [potter.js](/potter.js) znajduje się tablica postaci z Harry'ego Pottera.
//  Pogrupuj je według domu do jakiego przynależą (weź pod uwagę tylko te oznaczone jako żyjące).
//   Jeśli postać nie ma podanego domu powinna znajdować się pod kluczem "noHouse".
//    Dodatkowo usuń wszystkie pola oprócz imienia i typu. 
//    Typ powinien być jedną z wartości: `student`, `staff` lub `none` (jeśli postać nie jest ani nauczycielem ani studentem).

const { hogwardArray } = require("./potter");

//     Zadanie rozwiąż uzupełniając poniższy kod, tak aby otrzymać poniżej zaprezentowany wynik.
const help = hogwardArray.reduce((object,element) => {
    if (element.house === ""){
        element.house = "NoHouse"
    }
    object.push(element)
    return object
},[])
const resultArray = help.reduce((object,element,) => {
    const { house } = element;
    object[house] = object[house] ?? [];
    if (element.alive === true){
       if (element.hogwartsStaff === false && element.hogwartsStudent === false) {
            let a ={
                name: element.name,
                type: "none"
            }
            object[house].push(a);
       }
       if (element.hogwartsStaff === true && element.hogwartsStudent === false) {
        let a ={
            name: element.name,
            type: "staff"
        }
        object[house].push(a);
        }
       else {
        let a ={
            name: element.name,
            type: "student"
        }
        object[house].push(a);
        }
       
        
    }
    
    return object;
},[]);
console.log(resultArray)
