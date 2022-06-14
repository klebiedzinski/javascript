//jaka jest struktura promiseTab 
function razem(promisesTab, callback) {
    let licznik = 0
    for( let i = 0; i<promisesTab.length; ++i){
        promisesTab[i]().then((el) => {
            console.log(el)
            ++licznik
            if (licznik === promisesTab.length) callback()
        })
    }
    
  }

  const promise1  = () => {
    
   return new Promise((resolve,reject) => {
    resolve("promise1 resolved")
})
}
  const promise2 = () => {
   return new Promise((resolve,reject) => {
    resolve("promise2 resolved")
})
}
  const promise3 = () => {
   return new Promise((resolve,reject) => {
    resolve("promise3 resolved")
})
}
const promisesTab = [promise1,promise2,promise3]
const callback = () => {
    console.log("funkcja przekazana jako callback")
}
razem(promisesTab, callback)