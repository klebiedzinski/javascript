function counter(x,y){
    let foo = () => {
        let i = 1;
        const a = setInterval(() => {
            if(i === x) clearInterval(a)
            else {
                console.log(i)
                ++i
            }
        },y*1000)
    }
    return foo
}
   

const a = counter(5,0.5);
a()
