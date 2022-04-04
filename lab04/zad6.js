'use strict';
function nwd (a,b){
    if(a!==b){
        if (a>b) return nwd(a-b,b);
        if (b>a) return nwd(b-a,a);
    }
    return a;
}
console.log(nwd(10,1050))