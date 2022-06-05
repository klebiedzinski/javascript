const a = 
[ 
  { id: 'abc', name: 'Ala' }, 
  { id: 'def', name: 'Tomek' }, 
  { id: 'ghi', name: 'Jan' } 
]

const result = a.reduce((akum,el,index) => {
  akum.push({[a[index]['id']] : el})
  return akum
},[])

console.log(result)
