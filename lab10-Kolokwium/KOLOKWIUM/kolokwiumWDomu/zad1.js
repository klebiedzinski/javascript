const { series } = require("./series");

const miniseries = series.reduce ((akum,el) => {
    if (el.seasons===1){
        const a = {
            name: el.name,
            year: el.startYear,
            type: el.type
        }
        akum.push(a)
    }
    return akum

})


console.log(miniseries)

