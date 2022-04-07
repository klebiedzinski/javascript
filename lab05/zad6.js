const names = ['Ala','Alicja','Barbara']

const findEl = names.reduce((maybeAla,curName) => {
    if (maybeAla==='Ala') return maybeAla;
    return maybeAla;
});

console.log(findEl);