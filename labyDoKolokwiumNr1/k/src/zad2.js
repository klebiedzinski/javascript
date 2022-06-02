// **Zadanie 2.** 

// Napisz funkcję:

// `const poKolei = (funTab, cb) => (n) => { ... };`                    
                        

// taką, że:
// 1. pierwszym argumentem jest tablica funkcji asynchronicznych – załóż, że funkcje te muszą być przygotowane na przyjęcie argumentu `n`, z którego korzysta funkcja poKolei
// 2. funkcja poKolei powinna zapewnić, że następna funkcja np. `fun2` wykona się zawsze po poprzedniej np. `fun1`, a wyniki wygenerowane przez `fun1` zostaną przekazane do `fun2`.
// 3. trzecim argumentem jest „callback” `cb`, czyli funkcja, której zadaniem jest przetworzenie wyników zwracanych przez ostatnią funkcję w tablicy