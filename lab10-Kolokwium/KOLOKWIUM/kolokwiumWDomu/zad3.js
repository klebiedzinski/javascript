function foo(min,max){
    let count = min
    console.log(count)
    return () => count<max ? count++ : undefined
}
foo(1,3)
foo(1,5)

//dlaczego nie dziala