const arr = [
    { key: 0, x: [4, 5, [6]], y: [1, 2, [3, [4]]] },
    { key: 0, x: [1], y: [] }
];
const zad =arr.reduce((akum,el) =>{
    akum= akum+ [...el.x].length + [...el.x].length
    return akum
},0)
