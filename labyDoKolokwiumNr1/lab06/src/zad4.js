const games = require('./games.js').games;
const zad4 = games.reduce((result,element,index) => {
    if (index<5) result.push(element.imageUrl) ;
    return result
},[]);

// console.log(zad4)
