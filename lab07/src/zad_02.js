const { lp3 } = require('./toplist');
const lodash = require('lodash');

const zad1 = lodash.filter(lp3, {author: 'Queen' });

// console.log(zad1);


const zad2 = lodash.filter(lp3, (el) => el.change >= 10 && el.author==="Pink Floyd" );

// console.log(zad2);


const n=3;
const zad3 =lodash.dropRight(lodash.sortBy(lp3, (el) => el.change),n);


console.log(zad3)
 