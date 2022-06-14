// function capitalize(text) {
//     return String(text[0].toUpperCase()+text.substr(1))
// }
// console.log(capitalize("aboba"))

function capitalize(text) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if (typeof text !== 'string'){
                return reject("put a string!")
            }
            else{
                return resolve( String(text[0].toUpperCase()+text.substr(1)) )
            }
        },1000)

    })
}
// const result = capitalize("amogus")
// .then((data) => {console.log(data)})
// .catch((data) => {
//     console.log(data)
// })