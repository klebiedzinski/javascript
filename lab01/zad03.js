table = [1,2,3,4,12,-2,-1];

let min=1000;
let max=0;

for (let i =0;i<table.length;++i){
    console.log(table[i]);
    if(table[i]<min){
        min=table[i];
    }
    if(table[i]>max){
        max=table[i];
    }
}

console.log(min,max);

for (i = table.length-1;i>-1;--i){
console.log(table[i]);
}