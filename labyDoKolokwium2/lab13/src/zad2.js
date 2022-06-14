const callback = (array) => {
  console.log(array)
}

const func1 = () => {
  return new Promise( (resolve,reject) => {
    setTimeout(() => {
    resolve(1);
  },1000)

 });
  
}

 const func2 = () => {
  return new Promise( (resolve,reject) => {
    setTimeout(() => {
    resolve(2);
  },2000)

 });
  
}

 const func3 = () => {
  return new Promise( (resolve,reject) => {
    setTimeout(() => {
    resolve(3);
  },3000)

 });
  
}
 const funTab1 = [func1(),func3()];
 const funTab2 = [func2(),func1()];
const grupuj = (funTab1, funTab2, cb) => { 
  const result = []
  Promise.all([Promise.all(funTab1),Promise.all(funTab2)])
  .then((array) => {
    array[0].forEach((el,index) => {
      result.push([el,array[1][index]])
    })
    callback(result)
  })
 };
 grupuj(funTab1,funTab2,undefined)

