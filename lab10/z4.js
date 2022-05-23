function counter(a,b) {
  let foo = setInterval(() => {
    if (a > 0){
        console.log(a);
        --a;
    }
    else clearInterval(foo)
    
    },b)
    
    return foo
}
counter(2,1000)


