'use strict';
const person1 = {
    name: "Agata",
    age: 21
};
const person2 = {
    name: "Tomasz",
    age: 25
};
const person3 = {
    name: "Alicja",
    age: 31
};
const person4 = {
    name: "Jan",
    age: 20
};

const people=[person1,person2,person3,person4];
let wiek=0;
for(let i=0; i<people.length; ++i )
{
    wiek+=people[i].age;
}
let srednia=wiek/people.length;
console.log(wiek,srednia);

const below=[];
const above=[];
for(let i=0; i<people.length; ++i )
{
    if(people[i].age<srednia)
    {
        below.push(people[i].name);
    }
    else
    {
        above.push(people[i].name);
    }
}
console.log(below);
console.log(above);