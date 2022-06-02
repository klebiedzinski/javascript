function foo(){
    let a = 5
    function fooo(arg){
        return a + arg
    }
    return fooo(2)
}
console.log(foo())

function zad4(foo){
    return foo()
}
console.log(zad4(foo))