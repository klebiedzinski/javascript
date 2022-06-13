// Task 1: Translate the story into code.



const onMyBirthday = (isKaySick) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if (!isKaySick){
                resolve(1);
            }
            else reject(0);
        }, 2000)
       
    })
};

onMyBirthday(true)
.then( (result) => {
    console.log("i have " +result+" cakes")
})
.catch((result) => {
console.log("i have 0 cakes")
})