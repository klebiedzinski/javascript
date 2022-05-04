
const { lp3 } = require('./toplist');
const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }
//6
function zadanie_6(n,min,max){
    for (let i = 0; i < n ; ++i){
        const a = Math.floor(Math.random() * max) + min;
        console.log(lp3[a])
    }
}

// zadanie_6(5,1,5)

//7


