'use strict';
const games = require('./games.js').games;
const result = games.reduce((accum,curLink) => {
    accum.push(curLink.imageUrl);
    return accum;

},[]);

console.log(result);