// **Zadanie 2.** 

// Napisz funkcję:

// `const poKolei = (funTab, cb) => (n) => { ... };`                    
                        

// taką, że:
// 1. pierwszym argumentem jest tablica funkcji asynchronicznych – załóż, że funkcje te muszą być przygotowane na przyjęcie argumentu `n`, z którego korzysta funkcja poKolei
// 2. funkcja poKolei powinna zapewnić, że następna funkcja np. `fun2` wykona się zawsze po poprzedniej np. `fun1`, a wyniki wygenerowane przez `fun1` zostaną przekazane do `fun2`.
// 3. trzecim argumentem jest „callback” `cb`, czyli funkcja, której zadaniem jest przetworzenie wyników zwracanych przez ostatnią funkcję w tablicy

const poKolei = (funTab, cb) => (n) => {
   funTab[0](n).then((res) => {
    //argument - wynik pierwszej funkcji
    let argument = res
    for (let i=1; i<funTab.length; ++i) {
        argument = funTab[i-1](argument).then((res) => {return res})
        funTab[i]().then((res) =>{
            funTab
        })
        
    }
})
    

}
const foo1 = (n) => {
    return new Promise((resolve,reject) => {
        console.log("wykonanie funkcji1")
        resolve(n+1)
    })    
}
const foo2 = (n) => {
    return new Promise((resolve,reject) => {
        console.log("wykonanie funkcji2")
        resolve(n+2)
    })
}
const foo3 = (n) => {
    return new Promise((resolve,reject) => {
        console.log("wykonanie funkcji2")
        resolve(n+3)
    })
}
const foo4 = (n) => {
    return new Promise((resolve,reject) => {
        console.log("wykonanie funkcji3")
        resolve(n+4)
    })
}
const cb = (x) => {
    console.log(x)
}
const funTab = [foo1,foo2,foo3,foo4]

poKolei(funTab,cb)(5)
