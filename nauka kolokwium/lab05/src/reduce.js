'use strict';
const array = [1,2,3,4];
function zad1(array){
    const b = array.reduce((result,el) => {
        return result+el
    },0);
    return b;
}
// console.log(zad1(array))

const zad2 = array.reduce((result,element,index,array) => {
    (element < 0) ? array.pop(element) : array[index] = element*element;
},0);
// console.log(array)
const array1=[1, 3, 6, 2, 9]
const zad3 = array1.reduce((result,element,index) => {
    // console.log(index, element);

},0);

const tableOfObjects = [ 
    { id: 'abc', name: 'Ala' }, 
    { id: 'def', name: 'Tomek' }, 
    { id: 'ghi', name: 'Jan' } 
  ]
  let help = ""
  const zad4 = tableOfObjects.reduce((result,element,index,tableOfObjects) => {
       result.push({[element.id]: element});
       return result
  },[]);
  console.log(zad4)
 
  



