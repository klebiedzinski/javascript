function czyjest(x,table){
    for(i=0; i<table.length; ++i){
        if (x==table[i]){
            return true;
        }
    }
    return false;
}


const numbers = [4, 3, 5, 1, 3, 2, 21, 1, 65, -43, 9];

const unikatowe = [];
for( let i=0; i<numbers.length; ++i)
{
  if (!czyjest(numbers[i],unikatowe))
    {
        unikatowe.push(numbers[i]);
    }
}
console.log(unikatowe);