
const runFunc = () =>  {console.log(2)};
const runFunc2 = () => {return 0};
const status="Completed"
switch(status) {
    case 'Completed':
        runFunc();
    break
    case 'Running': 
        runFunc2();
}

console.log("hello")

