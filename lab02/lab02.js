const obj = {
    a: "tekst",
    b: 2
};

obj.c = true;
console.log(obj);
console.log(obj.b);
console.log(obj['b']);

delete(obj.a);
console.log(obj);