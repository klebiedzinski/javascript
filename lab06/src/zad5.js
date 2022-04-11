'use strict';
const zakupy = require('./listaZakupow.js').listaZakupow;

// const result = zakupy.reduce((accum,curElement,curIndex) => {
//     accum.push({[zakupy[curIndex]['produkt']] : curElement})
//     return accum
// },[]);
// console.log(result)

// const result = zakupy.reduce((accum,curElement,curIndex) => {
//     if (zakupy[curIndex]['typ']==='nabiał')  accum+=(curElement['cena'])*(curElement['ilosc']) ;
//     return accum
// },0);
// console.log(result)

// const result = zakupy.reduce((accum,curElement,curIndex) => {
//     if (zakupy[curIndex]['jednostka']==='kg')  accum.push(curElement['produkt']) ;
//     return accum.sort()
// },[]);
// console.log(result)

const result = zakupy.reduce((accum,curElement,curIndex,parametr='nabiał') => {
    if (zakupy[curIndex]['typ']===parametr)  accum.push(curElement['produkt']) ;
    return accum.sort()
},[]);
console.log(result)