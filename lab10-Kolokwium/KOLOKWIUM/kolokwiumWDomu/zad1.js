const { series } = require("./series");

const miniseries = series.filter((item) => {
    return item.seasons===1
})
.map((item) => {
    const a = {
        name: item.name,
        year: item.startYear,
        type: item.type
    }
    return a
})
// console.log(miniseries)
const seriale = series.filter((item) => {return item.seasons!==1})
.sort((a,b) => {return a.startYear-b.startYear})
.map((item) => {
    const a = {
        id: item.id,
        name: item.name,
        startYear: item.startYear,
        endYear: item.endYear,
        type: String(item.type),
        seasons: item.seasons
        
        
    }
})

const t1 = seriale.filter((item) => {return item.startYear<2010})
const t3 = seriale.filter((item) => {return item.startYear>=2010&&item.startYear<2020})
const t2 = seriale.filter((item) => {return item.startYear>=2020})
const result = [t1,t2,t3]
console.log(result)
