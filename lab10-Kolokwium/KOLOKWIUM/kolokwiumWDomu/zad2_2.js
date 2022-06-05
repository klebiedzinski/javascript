const lodash = require('lodash');

function detectChanges(original, modified) {
    const t1 = Object.entries(original).map((item) => [item[0],item[1].toString()])
    const t2 = Object.entries(modified).map((item) => [item[0],item[1].toString()])
    const result = t1.reduce((akum,curEl,curIndex) => {
        if (curEl[1]!==t2[curIndex][1]) akum.push(t2[curIndex])
        return akum
    },[])
    return result

}


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

console.log(detectChanges(object1, object2));