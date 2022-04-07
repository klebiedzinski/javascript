'use strict';

const arr = [1,2,3,4,5,6];
const wynik = arr.reduce((akum,el) =>  {
    return akum + el
},0);


console.log(wynik)