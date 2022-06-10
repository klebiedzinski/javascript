function foo1(){
    const number1 = 5;
    function foo2(number2 = 3){
        return number2 + number1
    }
    return foo2()
}
console.log(foo1())