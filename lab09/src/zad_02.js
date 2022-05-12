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