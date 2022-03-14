'use strict';
//4
const cat = { 
    name: 'Filemon', 
    age: 6 
  }

console.log("Kot ma na imię "+cat.name+" i ma "+cat.age+" lat.");

//5
cat.description="Kot ma na imię "+cat.name+" i ma "+cat.age+" lat.";
console.log(cat.description);

//6
cat.breed='rasa';
cat.colour='kolorowy';
cat.description+=" Oprocz tego jego rasa to "+cat.breed+" a kolor "+cat.colour+".";
console.log(cat);