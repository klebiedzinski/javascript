const wishlist = [   
    { name: 'Czajnik', netto: 100 },  
    { name: 'Lodówka', netto: 2730 },  
    { name: 'Mikrofalówka', netto: 940 },  
    { name: 'Mikser', netto: 120 },  
    { name: 'Piekarnik', netto: 3100 }, 
    { name: 'Zmywarka', netto: 2400 },
    { name: 'Toster', netto: 260 }
  ]


const a = wishlist.reduce((result,element) => {
     result+=element.netto*(77/100);
    return result
},0)

// console.log(a)

const b = wishlist.reduce((result,element) => {
    result.push(element.netto)
    return result
},[])
// console.log(b)

const c = wishlist.reduce((result,element) => {
    result.push(element.name +": "+element.netto).toString()
    return result
},[])

// console.log(c)

const d = wishlist.map(function (element) {
    return (element.name +": "+element.netto).toString()
})
// console.log(d)

const e = wishlist.reduce((result, element) => {
    if (element.netto < 500)  result.push(element)
    return result
},[])

// console.log(e)


