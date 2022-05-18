function zad1(numbers){
    function isIn (el,table){
        for (let i = 0 ; i< table.length ; ++i){
            if (el === table[i]) return true;
        }
        return false;
    }
    const table = []
    for (let i = 0; i < numbers.length; ++i){
        if (!isIn(numbers[i],table)) table.push(numbers[i])
    }
    return table
}
const numbers = [4, 3, 5, 1, 3, 2, 21, 1, 65, -43, 9];
// console.log(zad1(numbers))

function zad2(array){
     array = [ 4, 2, 'a', 'b', 3, 'aa', 'ww', 2, 'ab', -2];
    const table = []
    for (let i = 0; i<array.length; ++i){
        if (typeof(array[i])==='number') table.push(array[i])
    }
    return table
}

// console.log(zad2())

function zad3(testArray = [1, 2, null, [4, undefined, 11, 10], 6, [7, null, 0], null, 9] ){
    const table = []
    for (element of testArray){
        if (element===null) continue;
        if (typeof(element)==='object') table.push(...element);
        else table.push(element)
    }
    return table
}
console.log(zad3())
