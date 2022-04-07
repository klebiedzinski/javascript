console.log("Hello");


// Object
const obj = {
    klucz1: 'wartosc',
    klucz2: 3,
    klucz3: true
};

// tak samo jak slowniki, klucz i wartosc
console.log(obj.klucz1);
console.log(obj['klucz1']);
obj.klucz1='value';
console.log(obj['klucz1']);
/*
var - jebac
let - ZMIENNA zamiennik var, w funkcyjnym staramy sie nie uzywac, 
w petli odda moze
const - STALA, staramy sie najczesciej uzywac
zaczynamy od const zawsze zmienna, ew potem zmieniamy
mozemy zmieniac wartosc w srodku obiektu 

*/

console.log(obj);
delete obj.klucz1;
console.log(obj);
obj.klucz1='wartosc';
console.log(obj);
obj.klucz4='Hello';
console.log(obj);

//const person={ imie: 'Jan', nazwisko: 'Kowalski'};

const imie = 'Jan';
const nazwisko = 'Kowalski';

const person = { imie, nazwisko }; 
// to samo 
//const person1={
//    imie: imie
//}




const youngSolo = {
    name: 'Han',
    age: 45
};
const oldSolo = {
    name: 'Han',
    age: 76,
    starShip: 'FalconMillennium'
};


const justSolo = {...youngSolo, ...oldSolo}; // naklada na siebie dodaje albo zamienia 
console.log(justSolo);


//destrukturyzacja
const {age,starShip} = oldSolo;

console.log(age,starShip);




//tablice

const myArray = ['Jan',3,false];
console.log(myArray.length);
myArray[10]="co to";
console.log(myArray);

const {length} = myArray;
console.log(length);