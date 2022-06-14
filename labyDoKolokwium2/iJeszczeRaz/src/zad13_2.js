const grupuj = (funTab1, funTab2, cb) => { 
    Promise.all([Promise.all(funTab1),Promise.all(funTab2)]).then((res) => {
        const result = []
        const tab1 = res[0]
        const tab2 = res[1]
        tab1.forEach((el,index) => {
            result.push([el,tab2[index]])
            
        })
        cb(result)
        
    })
};
const foo1 = (cb=undefined) => {
    return new Promise((resolve,reject) => {
        resolve(1+1)
    })
}
const foo2 = (cb=undefined) => {
    return new Promise((resolve,reject) => {
        resolve(1+2)
    })
}
const foo3 = (cb=undefined) => {
    return new Promise((resolve,reject) => {
        resolve(1+3)
    })
}
const foo4 = (cb=undefined) => {
    return new Promise((resolve,reject) => {
        resolve(1+4)
    })
}
const funTab1 = [foo1(),foo2()]
const funTab2 = [foo3(),foo4()]
const cb = (x) => {
    console.log(x)
}
grupuj(funTab1,funTab2,cb)