const func1 = (x, cb) => {
    setTimeout(() => {
      console.log("Funkcja 1");
      // inkrementujemy x
      cb(x + 1);
    }, 4000);
}

const func2 = (x, cb) => {
    setTimeout(() => {
      console.log("funkcja 2");
       // inkrementujemy x
       cb(x + 1);
    }, 2000);
}
const cb = (x) => {console.log(x) }

// const poKolei = (fun1, fun2, cb) => {
//     fun1(0, (x) => {
//       console.log("pierwsza funkcja")
//       fun2(x,(x) => {
//         console.log("druga funkcja")
//         cb(x)
//       })
//     })
// };
// poKolei(func1,func2,cb)


const poKolei = (foo1,foo2,cb) => {
  foo1(10,(x) => {
    foo2(x,(data) => {
      cb(data)
    })
  })
}
poKolei(func1,func2,cb)