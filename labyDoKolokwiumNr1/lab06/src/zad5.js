const List = require('./listaZakupow.js').listaZakupow

const zad1 = List.reduce((result,element) => {
    result[element.produkt] = element
    return result
},{});
// console.log(zad1)

const zad2 = List.reduce((suma,element) => {
    if (element.typ === "nabiał") suma+=(element.cena*element.ilosc)
    return suma
},0)
// console.log(zad2)

const zad3 = List.reduce((result,element) => {
    if (element.jednostka === 'kg') result.push(element.produkt)
    return result.sort()
},[])

// console.log(zad3)

function zad4 (type){
    const reduce = List.reduce((result,element) => {
        if ((element.typ === type) && (element.ilosc*element.cena < 10)) result.push(element.produkt)
        return result.sort().reverse()
    },[])
    return reduce
}

// console.log(zad4('nabiał'))

const zad5 = List.reduce((result,element) => {
    if(element.jednostka === 'sztuk') result.push(element)
    return result
},[])
// console.log(zad5)


let podindex = 1;
let typ
const zad6 = List.sort((a,b) => (a.typ > b.typ) ? 1: -1);
const zadanie6 = zad6.reduce((result,element,index) => {
    
    if (index === 0)  {
        result+=element.typ.toString()+": "+"\n";
        typ=element.typ
    }
    else {
        if(element.typ === typ){
        result+=String(podindex)+" "+String(element.produkt)+" - "+String(element.jednostka)+": "+String(element.ilosc)+"\n";
        podindex+=1
        }
        else {
            typ = element.typ
            podindex=1
            result+=String(typ)+": "+"\n";

        }
    }
    
    return result
   
},"")
console.log(zadanie6)
//pogrupowac typ :: produkty
//



