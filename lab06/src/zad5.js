'use strict';
const zakupy = require('./listaZakupow.js').listaZakupow;


//zadanie1

// const result = zakupy.reduce((accum,curElement,curIndex) => {
//     accum.push({[zakupy[curIndex]['produkt']] : curElement})
//     return accum
// },[]);
// console.log(result)

//zadanie2

// const result = zakupy.reduce((accum,curElement,curIndex) => {
//     if (zakupy[curIndex]['typ']==='nabiał')  accum+=(curElement['cena'])*(curElement['ilosc']) ;
//     return accum
// },0);
// console.log(result)

// zadanie3

// const result = zakupy.reduce((accum,curElement,curIndex) => {
//     if (zakupy[curIndex]['jednostka']==='kg')  accum.push(curElement['produkt']) ;
//     return accum.sort()
// },[]);
// console.log(result)

//zadanie4

// function ItemsByType(zakupy, type){
//     const result = zakupy.reduce((accum, curEl) => {
//         if(curEl['typ'] === type && curEl['cena'] * curEl['ilość'] < 10) accum.push(curEl["produkt"]);
        
//         return accum.sort();
//     },[]);
// }
// console.log(ItemsByType(zakupy,"nabiał"));


//zadanie5
// const result = zakupy.reduce((accum,element,curIndex) => {
//     if (zakupy[curIndex]['jednostka']==='sztuk')  accum.push(element['produkt']);
//     return accum;
// },[]);
// console.log(result)
 
