'use strict';

const arr =  [1, 3, 6, 2, 9]
const reducer = arr.reduce((string,el,index) => {
    string += (index+": "+el +'\n');
    return string;
},'');

console.log(reducer)


