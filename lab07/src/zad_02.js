const { lp3 } = require('./toplist');
const lodash = require('lodash');


//1
const zad1 = lodash.filter(lp3, {author: 'Queen' });
// console.log(zad1);

//2
const zad2 = lodash.filter(lp3, (el) => el.change >= 10 && el.author==="Pink Floyd" );
// console.log(zad2);

//3
const n=3;
const zad3 =lodash.dropRight(lodash.sortBy(lp3, (el) => el.change),n);
// console.log(zad3)

//4
const zad4 = {
    author: lodash.find(lp3,{place: 1}).author,
    song: lodash.find(lp3,{place: 1}).song
}
// console.log(zad4)

// 5 

function zad5(table){
    
    lodash.forEach(table,function(el){lodash.isInteger(el) ? null : console.log("Tablica nie zawiera samych intow") });

    lodash.forEach(table, function (element) {
        console.log(lodash.find(lp3, (el) => el.place===element))
    });
}

// zad5([10])



//6 
function zad6(n,min,max){
    while (n!==0) {
        console.log(lodash.find(lp3,{place: lodash.random(min,max)}).song)
        n-=1
    }
    
}

// zad6(2,1,5)


//7

// const table = lodash.slice(lp3,0,10)
// lodash.forEach(table, (el,index) => {
//     lodash.delay( () => console.log(el) , 2000 * index+1)
// });

//8
const zad8 = lodash.filter(lp3, (el) => el.change<0)
// console.log(zad8)

//9
const zad9 = lodash.keyBy(lp3, (el) => el.song)
// console.log(zad9)

//10 -- not done
// const bandSongs = lodash.groupBy(lp3, (el) => el.author)
// console.log(bandSongs)


//11
const zad11 = lodash.countBy(lp3, (el) => el.author)
// console.log(zad11)


//12
const lowest = lodash.sortBy(lp3, (el) => el.change)[0]
const help = lodash.sortBy(lp3, (el) => el.change).reverse()
const highest = help[0]
console.log(lowest)
console.log(highest)


 