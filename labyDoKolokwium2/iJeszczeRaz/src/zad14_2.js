const connect = (funTab, fun) => { 
    Promise.all(funTab).then((res) => {
        const result = []
        const result2 = []
        for (i of res){
            result2.push(fun(i))
        }
        Promise.all(result2).then((data) => {
            res.forEach((el,index) => {
                result.push([el,data[index]])
            })
            console.log(result)
        })
    })
 };

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
const funTab = [promise1(),promise2(),promise3(),promise4(),promise5()]

const fun = (x) => {
    return new Promise((resolve,reject) => {
        resolve(x+"ogus")
    })
}

connect(funTab,fun)