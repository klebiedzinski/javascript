'use strict';
const wishlist = [   
    { name: 'Czajnik', netto: 100 },  
    { name: 'Lodówka', netto: 2730 },  
    { name: 'Mikrofalówka', netto: 940 },  
    { name: 'Mikser', netto: 120 },  
    { name: 'Piekarnik', netto: 3100 }, 
    { name: 'Zmywarka', netto: 2400 },
    { name: 'Toster', netto: 260 }
  ]

const totalPrice = wishlist.reduce((acum,el,curIndex,wishlist) => {
    return acum+=wishlist[curIndex]['netto'];
   
},0);

console.log(totalPrice);

const toArr = wishlist.reduce((acum,el,curIndex,wishlist) => {
    acum.push(wishlist[curIndex]['netto']);
    return acum;
   
},[]);
console.log(toArr);

const newArr = wishlist.reduce((acum,el,curIndex,wishlist) => {
    acum.push(wishlist[curIndex]['name'] + ':' + wishlist[curIndex]['netto']);
    return acum
},[]);

console.log(newArr);

const map = new Map(wishlist.entries(wishlist));
console.log(map);


const newArray = wishlist.reduce((elements, x,curIndex) => {
    if (wishlist[curIndex]['netto'] < 500)  elements.push(wishlist[curIndex]['netto']);
    return elements;
},[]);

console.log(newArray);

