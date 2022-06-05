const { isArray } = require('lodash');
const lodash = require('lodash');
//different with i topairs
function detectChanges(original, modified) {
    const a = Object.entries(original)
    .reduce((akum,item) => {
        // console.log(item)
        isArray(item[1]) ?  akum.push([item[0],item[1][0]]) : akum.push(item)  //jak porownac tablice 
        return akum
    },[])
    const b = Object.entries(modified)
    .reduce((akum,item) => {
        // console.log(item)
        isArray(item[1]) ?  akum.push([item[0],item[1][0]]) : akum.push(item) //jak porownac tablice
        return akum
    },[])
    
    const result = a.reduce((akum,curEl,curIndex) => {
        if (curEl[1]!==b[curIndex][1]) akum.push(b[curIndex])
        return akum
    },[])
    
    console.log(a)
    console.log(b)
    console.log(result)
}

// Input
const object1 = {
  id: 2,
  name: 'Przyjaciele',
  startYear: 1994,
  endYear: 2004,
  type: ["Komedia"],
  seasons: 10
};


const object2 = {
  id: 2,
  name: 'Przyjaciele edytowany',
  startYear: 1994,
  endYear: 2010,
  type: ["Komedia"],
  seasons: 10
};
detectChanges(object1,object2)