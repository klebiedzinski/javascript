'use strict';
function unequal(a,b,c) {
    if (a!==b && a!==c && c!==b)  return true ;
    else return false;
}
console.log(unequal(1,1,2));
console.log(unequal(1,2,3));