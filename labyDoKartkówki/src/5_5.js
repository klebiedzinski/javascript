const wishlist = [   
    { name: 'Czajnik', netto: 100 },  
    { name: 'Lodówka', netto: 2730 },  
    { name: 'Mikrofalówka', netto: 940 },  
    { name: 'Mikser', netto: 120 },  
    { name: 'Piekarnik', netto: 3100 }, 
    { name: 'Zmywarka', netto: 2400 },
    { name: 'Toster', netto: 260 }
  ]

  const zad1 = wishlist.reduce((suma,el) => {
    suma+=(el.netto*(23/100))
    return suma
  },0)
  console.log(zad1)

  const zad3 = wishlist.reduce((array,el) => {
    array.push({[el.name]: el.netto})
    return array
  },[])
  console.log(zad3)

  function zad6(string,array)  {
      return array.find((stringus) => {return stringus==string})
  }
  console.log(zad6("Alaa",[ 'Ala', 'Kot', 'Pies' ]))


  //6.6
  const arr = [
    { key: 0, x: [4,5,6], y: [1,2,3,4] },
    { key: 0, x: [1], y: [] }
]    
const result = arr.reduce((sum,el) => {
    sum+=el.x.length+=el.y.length
    return sum
},0)
console.log(result)




