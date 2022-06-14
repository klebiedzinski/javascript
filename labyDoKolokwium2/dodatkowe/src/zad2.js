

const connect = (funTab, fun) => { 
    
    Promise.all(funTab).then((el) => {
        const tab1 = []
        for (i of el) {
            tab1.push(i)
        }
        // console.log(tab1)

        const tab2 = tab1.map((el) => {return fun(el)})
        // console.log(tab2)
        Promise.all(tab2).then((data) => {
            const result = []
            // console.log(data)
            // console.log(tab1)
            data.forEach((el,index) => {
                result.push([tab1[index],el])
            },[])
            console.log(result)
        })

        
        
        
    })
    
    
    
};

const promise1  = () => {
    return new Promise((resolve,reject) => {
     resolve(2)
 })
 }
   const promise2 = () => {
    return new Promise((resolve,reject) => {
     resolve(2)
 })
 }
   const promise3 = () => {
    return new Promise((resolve,reject) => {
     resolve(3)
 })
 }

const funTab = [promise1(),promise2(),promise3()]
const foo = async (x) => {return x+1}
connect(funTab,foo)