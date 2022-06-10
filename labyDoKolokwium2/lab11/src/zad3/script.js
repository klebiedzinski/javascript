let x = 0;
var interval;
function start(){
    const print = () => {
        console.log(x);
        ++x;
    }
    interval = setInterval(print,1000)
    
   
}
function stop() {
    clearInterval(interval)
}
const wyczyść = () => {x = 0}