const { lp3 } = require('./toplist');
const lodash = require('lodash');
const { indexOf } = require('lodash');

const zad1  = lodash.filter(lp3, (el) => {
    return el.author === "Queen"
})
// console.log(zad1)

const zad2 = lodash.filter(lp3, (el) => {
    return el.author === "Pink Floyd" && el.change>=10
})
// console.log(zad2)

const zad3 = lodash.remove(lodash.sortBy(lp3, (el) => {return el.change}),(el) => {return indexOf(el)<2})

// console.log(zad3)

const zad4 = lodash.last(lodash.sortBy(lp3,(el) => {return el.place}).reverse())
// console.log(zad4)

function zad5(array){
    if(lodash.every(array, (el) => {return typeof(el) === "number"})){
        const result = lodash.filter(lp3,(el) => {
            return array.some((item) => item===el.place)
            
        })
        return result
    }
    else{
        console.error("wypierdalaj z ta tablica");
    }
    
}
console.log(zad5([1,2,3]))


