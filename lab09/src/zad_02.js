//   // zad02 lab09
//   Zdefiniuj klasę Fraction zawierającą pola numerator i denumerator (mianownik i licznik), 
//   konstruktor oraz metody multiplyBy, multiply i print dającymi następujące efekty:
//      *u.multiplyBy(v) ma powodować, że u staje się iloczynem ułamków u i v  --  input albo ulamek albo calkowita  
//      *u.multiplyBy(i) ma powodować, że u staje się iloczynem ułamka u i liczby (dodatniej całkowitej) 
//      *metoda multiply(x, y) mająca dawać jako wynik nowy ułamek będący iloczynem ułamków x i y -- 
//      *print() ma dawać jako wynik napis reprezentujący ułamek

class Fraction{
    constructor(numerator, denumerator){
        this.numerator = numerator;
        this.denumerator = denumerator;
    }
     print() {console.log(this.denumerator);
        console.log("-")
        console.log(this.numerator);
    }

}
const frac1 = new Fraction(2,3)
frac1.print()