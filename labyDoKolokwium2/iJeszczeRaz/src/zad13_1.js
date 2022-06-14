const poKolei = (fun1, fun2, cb) => {
    fun1(10, (x) => {
        fun2(x, (x) => {
            cb(x)
        })
    })
};

const foo1 = (x,cb) => {
    return new Promise((resolve,reject) => {
        resolve(cb(x+1))
    })
}
const foo2 = (x,cb) => {
    return new Promise((resolve,reject) => {
        resolve(cb(x+1))
    })
}
const cb = (x) => {
    console.log(x)
}
poKolei(foo1,foo2,cb)