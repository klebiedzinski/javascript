function counter(a,b){
    --a;
    let i = 2;
    const fun = () => {
       const interval = setInterval( () => {
        console.log(i);
        ++i;
       },b) 
       
       setTimeout(() => {clearInterval(interval)},a*b)
    }
    return fun()
}
counter(10,100);