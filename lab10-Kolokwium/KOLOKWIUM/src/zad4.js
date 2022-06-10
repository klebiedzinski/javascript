// **Zadanie 4.**

// Stwórz klasę `Log`, która będzie przechowywać historię komunikatów w aplikacji. Klasa ta powinna zawierać:

// 1. Funkcję `write`, która przyjmuje dowolną liczbę argumentów i zwraca je jako string np.:

// ```js
// // Input:
// instancjaLog.write("test: ", () => {
//   return "komunikat";
// });

// // Output:
// // "test: () => { return 'komunikat' }"
// ```

// 2. Funkcję `printHistory`, która przyjmuje opcjonalny parametr `range`. Funkcja zwraca wszystkie komunikaty wypisane z pomocą funkcji `write`.
// Powinny być one zwrócone jako jeden string, gdzie poszczególne komunikaty są rozdzielone znakiem nowej linii (\n). Parametr `range` powinien być dwuelementową tablicą, gdzie:

// - nie może być ujemnych liczb
// - pierwszy element powinien być mniejszy od drugiego elementu
// - drugi element nie powinien być większy od ilości komunikatów w historii.

// Jeśli nie został przekazany do funkcji parametr range, to zwracane są wszystkie komunikaty w historii.

// ```js
// // Input:
// instancjaLog.printHistory();
// instancjaLog.printHistory([1, 5]);
// instancjaLog.printHistory([5, 1]);
// instancjaLog.printHistory([2]);

// // Output:
// // cała historia
// // tylko komunikaty od 1 do 5 włącznie
// // błąd
// // błąd
// ```

// 3. Funkcję `deleteHistory`, która usuwa wszystkie wydrukowane komunikaty (sprawia, że printHistory zwraca pusty string).

// ```js
// // Input:
// instancjaLog.clearHistory();
// instancjaLog.printHistory();

// // Output:
// // pusty string
// ```

class Log{
    constructor(logs){
        this.logs = logs
    }
    write(...args){
        let str = ""
        for (let i = 0; i<args.length; ++i){
            str += args[i].toString()
        }
        this.logs.push(str);
        return str
    }
    printHistory(range = this.logs.length){ // :((((( [0,this.logs.length]
        console.log(this.logs.length)
        return this.logs.reduce((akum,el,index)=>{
            if(index >= range[0] && index <= range[1]){
                akum+=el.toString()+"\n"
            }
            return akum
        },"")
    }


    deleteHistory(){
        this.logs=[]
    }

}
const instancjaLog = new Log([])

instancjaLog.write("aa1","aa",2,() => {})
instancjaLog.write("aa2","aa",2,() => {})
instancjaLog.write("aa3","aa",2,() => {})
instancjaLog.write("aa4","aa",2,() => {})

console.log(instancjaLog.printHistory())
