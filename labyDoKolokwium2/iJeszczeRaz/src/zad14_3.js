
const razem = (promisesTab, callback) => {
   for (let i =0;i<promisesTab.length; ++i){
    promisesTab[i].then((el) => {
        console.log(el)
        if(i === promiseTab.length-1) callback()
    })
   }
  }


const promise1 = () => {
    return new Promise((resolve,reject) => {
        resolve(1)
    })
}
const promise2 = () => {
    return new Promise((resolve,reject) => {
        resolve(2)
    })
}
const promise3 = () => {
    return new Promise((resolve,reject) => {
        resolve(3)
    })
}
const promise4 = () => {
    return new Promise((resolve,reject) => {
        resolve(4)
    })
}
const promise5 = () => {
    return new Promise((resolve,reject) => {
        resolve(5)
    })
}
const cb = () => {
    console.log("callback")
}
const promiseTab = [promise1(),promise2(),promise3(),promise4(),promise5()]
razem(promiseTab,cb)
