'use strict';

const array = [ 4, 2, 'a', 'b', 3, 'aa', 'ww', 2, 'ab', -2];

for( let i=0; i<array.length; ++i)
{
    for (let j=i; j<array.length-1; ++j)
    {
        if (typeof array[j]!="number")
        {
            [array[j],array[j+1]] = [array[j+1],array[j]];
        }
    }
}
console.log(array);