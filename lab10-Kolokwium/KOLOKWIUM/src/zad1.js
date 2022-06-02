// **Zadanie 1.**

const { type } = require("os")
const { series } = require("./series")

// w pliku [series.js](/series.js) znajduje się lista seriali. Wykorzystując jedynie programowanie funkcyjne i jedynie funkcje wbudowane takie jak: `reduce`, `sort`, `filter` i `push` stwórz dwa obiekty `miniseries` i `series`, gdzie:

// 1. `miniseries` będzie tablicą zawierającą tylko miniseriale (jednosezonowe), posortowane alfabetycznie. Każdy z miniseriali powinien zawierać wyłącznie `name`, `year` i `type`.
// (Miniseriale rok rozpoczęcia i zakończenia mają taki sam)

// 2. `series` będzie trzyelementową tablicą tablic, gdzie:

//    - pierwsza tablica będzie zawierała seriale rozpoczęte przed rokiem 2010
//    - druga tablica będzie zawierała seriale rozpocząte między 2010 (włącznie) a 2020 rokiem
//    - trzecia tablica będzie zawierała tablice rozpoczęte po 2020 (włącznie)

//    Dodatkowo:

//    - Seriale powinny być posortowane latami, od najstarszego tzn. wg roku rozpoczęcia, a następnie wg. roku zakończenia (jeśli serial nie ma roku zakończenia,
// to powinien wyświetlić się przed serialami, które rok zakończenia mają).
//    - Gatunek powinien być zapisany jako string, nie jako tablica stringów:
//      `["Dramat", "Wojenny"]` -> `"Dramat, Wojenny",`
//      Między kolejnymi gatunkami, po przecinku znajduje się spacja!
//    - Jeżeli serial nie ma roku zakończenia, to nie wyświetlamy go (tj. roku zakończenia) w obiekcie.

// ```js
// // Output miniseries
// [
//   { name: "Czarnobyl", type: ["Dramat"], year: 2019 },
//   { name: "Gambit królowej", type: ["Dramat"], year: 2020 },
//   { name: "Kompania braci", type: ["Dramat", "Wojenny"], year: 2001 },
//   { name: "Pacyfik", type: ["Dramat", "Wojenny"], year: 2010 },
// ];

// // Output series
// [
//   [
//     // ...
//   ],
//   [
//     // ...
//     {
//       id: 14,
//       name: "Rick i Morty",
//       startYear: 2013,
//       type: "Komedia, Przygodowy, Sci-Fi, Animacja dla dorosłych",
//       seasons: 9,
//     },
//     {
//       id: 11,
//       name: "House of Cards",
//       startYear: 2013,
//       endYear: 2018,
//       type: "Dramat, Polityczny",
//       seasons: 6,
//     },
//     // ...
//   ],
//   [
//     // ...
//   ],
// ];
// ```

//reduce`, `sort`, `filter` i `push

const miniserialeHelp = series.filter((item) => {
    return item.seasons === 1
})
const miniseriale = miniserialeHelp.sort().reduce((akum,el) => {
    const a = {
        name: el.name,
        year: el.startYear,
        type: el.type
    }
    akum.push(a);
    return akum
},[])
// console.log(miniseriale)




const h1 = series.filter((item) => {
    return (item.startYear < 2010 && item.seasons !== 1)
});
const h2 = series.filter((item) => {
    return (item.startYear >= 2010 && item.endYear < 2020 && item.seasons !== 1)
});

const h3 = series.filter((item) => {
    return (item.startYear >= 2020 && item.seasons !== 1)
});


const t1 = h1.sort((a,b)=> {
    return a.startYear - b.startYear
});
const t2 = h2.sort((a,b)=> {
    return a.startYear - b.startYear
});
const t3 = h3.sort((a,b)=> {
    return a.startYear - b.startYear
});

const T1 = t1.reduce((akum,el) => {
    if (el.type.length > 1){
        const typy = (el.type[0]+", "+el.type[1]).toString()
       
        const a = {
            id: el.id,
            name: el.name,
            startYear: el.startYear,
            endYear: el.endYear,
            type: typy,
            seasons: el.seasons
        }
        akum.push(a)
    }
    else{
    
            const a = {
                id: el.id,
                name: el.name,
                startYear: el.startYear,
                endYear: el.endYear,
                type: el.type[0].toString(),
                seasons: el.seasons
        }
        akum.push(a)
    }
   
    
    return akum
},[])
const T2 = t2.reduce((akum,el) => {
    if (el.type.length > 1){
        const typy = (el.type[0]+", "+el.type[1]).toString()
       
        const a = {
            id: el.id,
            name: el.name,
            startYear: el.startYear,
            endYear: el.endYear,
            type: typy,
            seasons: el.seasons
        }
        akum.push(a)
    }
    else{
    
            const a = {
                id: el.id,
                name: el.name,
                startYear: el.startYear,
                endYear: el.endYear,
                type: el.type[0].toString(),
                seasons: el.seasons
        }
        akum.push(a)
    }
   
    
    return akum
},[])
const T3 = t3.reduce((akum,el) => {
    if (el.type.length > 1){
        const typy = (el.type[0]+", "+el.type[1]).toString()
       
        const a = {
            id: el.id,
            name: el.name,
            startYear: el.startYear,
            endYear: el.endYear,
            type: typy,
            seasons: el.seasons
        }
        akum.push(a)
    }
    else{
    
            const a = {
                id: el.id,
                name: el.name,
                startYear: el.startYear,
                endYear: el.endYear,
                type: el.type[0].toString(),
                seasons: el.seasons
        }
        akum.push(a)
    }
   
    
    return akum
},[])
const Zad2_series = [T1,T2,T3]
console.log(Zad2_series)


