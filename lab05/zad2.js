'use strict';
const arr = [-1,2,3,4,5,-6];

const wynik = arr.reduce((akum,el) => {
    if (el>0) akum.push(el*el);
    return akum
},[]);

console.log(wynik)