// tak jest ok????
class Log{
    constructor(){
        this.history = []
    }

    write = (...args) => {
       const result = args.reduce((string,el) => {
            return string+=el
        },"")
        this.history.push(result)
        return result
    }
    printHistory = (range = [0,this.history.length-1]) => {
        if (range[0]>range[1] || range[1]>this.history.length-1) return "błąd";
        const result =  this.history.reduce((string,curEl,curIndex) => {
           if (curIndex>=range[0] && curIndex<=range[1]){
            string+=(curEl+"\n")
           }
            
            return string
        },"")
        console.log(result)
    }
    clearHistory = () => {
        this.history = []
    }
}

const instancjaLog = new Log()

instancjaLog.write("aboba",() =>{ return "aaaaaaaaaaaaaaaaaaaa"})
instancjaLog.write("aboba",() =>{ return "aaaaaaaaaaaaaaaaaaaa"})
instancjaLog.write("aboba",() =>{ return "aaaaaaaaaaaaaaaaaaaa"})
instancjaLog.printHistory([1,2])
instancjaLog.clearHistory()
instancjaLog.printHistory()
