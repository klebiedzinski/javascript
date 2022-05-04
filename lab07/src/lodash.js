const lodash = require('lodash');
const myList = [
    'water','chicken','banana','banana','cake','water'
]
const List = lodash.difference(myList, ['water','banana'])
console.log(List)
