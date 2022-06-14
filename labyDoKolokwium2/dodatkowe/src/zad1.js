// const getRand = () => {
//     return Math.floor(Math.random() * 1000);
//   };
  
//   const getNum = (cb) => {
//     setTimeout(() => {
//       cb(getRand());
//     }, getRand() * 5);
//   };

//   const asyncSort = (dim) => {
//     const array = [];
//     for(let i = 0; i<dim; ++i){
//         getNum((x) => {
//           // console.log(x)
//           array.push(x);
//           if (array.length===dim) console.log(array.sort((a,b) => {return b - a}))

//         })
        
//     }
//   };

//   asyncSort(5)







// const getRand = () => {
//   return Math.floor(Math.random() * 1000);
// };

// const getNum = (cb) => {
//   setTimeout(() => {
//     cb(getRand());
//   }, getRand() * 5);
// };

// function asyncSort(dim)  {
//   const array = []
//   for(let i=0; i<dim; ++i){
//     getNum((x) => {
//       array.push(x)
//       if (array.length===dim) console.log( array.sort())
//   })
  
// }
//   // console.log(array)
// }
// asyncSort(5)

const getRand = () => {
  return Math.floor(Math.random() * 1000);
};

const getNum = (cb) => {
  setTimeout(() => {
    cb(getRand());
  }, getRand() * 5);
};
//jak to zreturnowac
const asyncSort = (dim) => {
  const array = []
  for (let i=0; i<dim; ++i){
    const a = getNum((x) => {
      array.push(x)
      if(array.length===dim) {console.log(array)}
     
    })
    
    
  }
  
};
console.log(asyncSort(5))




















