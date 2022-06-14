const { result } = require("lodash");

const connect = (funTab, fun) => { 
    
    const tab1 =Promise.all([Promise.all(funTab)]).then((el) => {
        const result = []
        const tab = el[0]
        for (i of tab) {
            result.push(i)
        }
        // console.log(result)
        foo(result[0]).then((el)=> console.log(el))
        
        
    })
    
    
    
};

const foo1 = async () => {return 1}
const foo2 = async () => {return 2}
const foo3 = async () => {return 3}
const funTab = [foo1(),foo2(),foo3()]
const foo = async (x) => {return x+1}
connect(funTab,foo)