function startCounter(x){
    setInterval(() => {
        ++x
        console.log(x)
    }, 1000)
}

function stopCounter(foo){
    setTimeout(() => clearTimeout(foo),10)
}

function clearCounter(x){
    x = 0
    return x
}
let x = 0