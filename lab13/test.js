const { rejects } = require("assert");
const { createBrotliCompress } = require("zlib");

// const poKolei = (fun1, fun2, cb) => { ... };

const func1 = (a) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if( typeof a === 'number')
            {
                if (a>0) resolve(true)
                else resolve(false)
            }
            else reject("Nie podano liczby")
        }, 2000);
    });
}
func1().then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err)
});

//Promise.all([arrayOfFunctions]).then((data) => {
// 
// })


