const { indexOf, isPlainObject } = require('lodash');
const lodash = require('lodash');

const { lp3 } = require('./toplist');


const zad1 = lodash.filter(lp3, (el) => {return el.author === "Queen"})
// console.log(zad1)

const zad2 = lodash.filter(lp3, (el) => {return el.author === "Pink Floyd" && el.change >= 10})
// console.log(zad2)


const n = 5
const zad3 = lodash.remove(lodash.sortBy(lp3, (el) => {return el.change} ) , (el) => { return lodash.sortBy(lp3, (el) => {return el.change} ).indexOf(el)<lp3.length-n}) 
// console.log(zad3)
const maks = (lp3.change)
const help = lodash.sortBy(lp3,(el) => {return el.change}).reverse()
const zad4 = {
    author: lodash.head(help).author,
    song: lodash.head(help).song
}


const array = [1,4]

function zad5(array){
    
    lodash.remove(array, (el) => { return typeof el !== "number"})
    const result = []
    
    
    for (let i =0;i<array.length; ++i){
        // console.log(i)
        result.push(lodash.find(lp3,(el) => {return el.place === array[i]}))
    }
    
    return result
    
}
// console.log(zad5(array))

function zad6(n,min,max){
    let i = 1;
    while (i<=n){
        let random = lodash.random(min,max)
        console.log(lp3[random])
        ++i;
    }
}
// zad6(2,0,3)

const zad8 = lodash.filter(lp3,(el) => {return el.change < 0})
// console.log(zad8)

const zad9 = lodash.keyBy(lp3, (el) => {return el.song})
// console.log(zad9)



const zad10 =lodash.groupBy(lp3, (el) => {return el.author})
// console.log(zad10)



const zad11 = lodash.countBy(lp3, (el) => {return el.author})
// console.log(zad11)
