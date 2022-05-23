let x=0;
var interval;
function counter(){
    x++;
    console.log(x)
}
function startCounter(x){
   interval = setInterval(counter,1000)
}

function stopCounter(){
    clearInterval(interval)
}

function clearCounter(){
    x = 0
    
}
