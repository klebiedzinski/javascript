'use strict';
const arrOfObjs = [ 
    { id: 'abc', name: 'Ala' }, 
    { id: 'def', name: 'Tomek' }, 
    { id: 'ghi', name: 'Jan' } 
  ];

const wynik =  arrOfObjs.reduce((objects,curValue, curIndex,Table) => {
    objects.push({[Table[curIndex]['id']] : curValue});
    return objects


},[]);
console.log(wynik);