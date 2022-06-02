// **Zadanie 3.** 

// Wyobraź sobie, że piszesz program do sprzedaży ciastek w swojej cukierni. Każde ciastko kosztuje 5 zł i każdy klient może kupić tylko jedno ciastko.  
// Klienci mogą zapłacić za ciastko monetą lub banknotem o nominale 5, 10 lub 20 zł. Zawsze musisz wydać prawidłową resztę. 

// **Uwaga!** Jako nowa cukiernia nie masz wkładu własnego oprócz ciastek. Twój początkowy budżet wynosi 0 zł. 

// Napisz program, który sprawdzi, czy będziesz w stanie wypłacić każdemu klientowi resztę.

// ```
// // Przykład działania:

// checkExchange([5, 5, 5, 10, 20]) // true

// checkExchange([5, 5, 10, 10, 20]) // false

// checkExchange([10, 10]) // false

// checkExchange([5, 5, 10]) // true

function checkExchange(array) {
    let budget = {
        n5: 0,
        n10: 0,
        n20: 0
    };
    for (el of array){
        if (el ===5) {
            budget.n5+=1
        }
        if (el === 10){
            if (budget.n5 > 0){
                budget.n5-=1;
                budget.n10+=1;
            }
            else { return false};
        }
        if (el === 20){
            if(budget.n10 > 0 && budget.n5 > 0){
                budget.n10-=1;
                budget.n5-=1;
                budget.n20+=1;
            }
            else {
                if (budget.n5 > 2){
                    budget.n5-=3;
                    budget.n20+=1;
                }
                else {return false}
            }
        }
    }
    return true
    
}
console.log(checkExchange([5, 5, 5, 10, 20])) // true

console.log(checkExchange([5, 5, 10, 10, 20])) // false

console.log(checkExchange([10, 10])) // false

console.log(checkExchange([5, 5, 10])) // true

