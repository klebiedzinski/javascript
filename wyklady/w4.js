const sum = function (a,b) {
    return a + b;
};
const mysum = (a,b) => a+b; //lambda korciotka funkcja

const sumReducer = (acc, elem) => acc + elem;
const multiplyReducer = (acc, elem) => acc * elem;

const reduce = (reducer, accInit, arr) => {
    let acc = accInit;
    for ( let i =0, {length}=arr; i<length; i++) {
        acc = reducer(acc, arr[i]);    
    }
    return acc;
};

const myArr = [4,6,7,3,9,1];
console.log(reduce(sumReducer,0,myArr)); // skrocilismy ladnie petle i uzylismy reduce i sumreducer


const filter = (pred,arr) => reduce((acc,elem) => 
    pred(elem) ? acc.concat([elem]) :  acc
    , [], arr);
console.log(filter((elem) => elem%2===0 ))