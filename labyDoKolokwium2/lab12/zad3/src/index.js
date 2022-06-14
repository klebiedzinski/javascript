class Vector2{
    constructor(x,y){
        this.x = x
        this.y = y
    }

    diff(vector){
        this.x -= vector.x
        this.y -= vector.y
    }

    multiplyBy(number){
        this.x *= number
        this.y *= number
    }

    toString(){
        return String("x: "+this.x+" y: "+this.y)
    }
}


class Ship{

    constructor(faction,position,strength,health){
        this.faction = faction
        this.position = position //class Vector2
        this.strength = strength
        this.health = health
    }

    getDistance(enemyShip){
        if(this.position === undefined || enemyShip.position === undefined){
            console.log("Obliczanie niemożliwe");
            return;
        } 
        if (this.health < 0 || enemyShip.health < 0){
            console.log("Statek zniszczony")
        }
        else return this.position.diff(enemyShip.position)
    }
    checkHealth(){
        this.health < 0 ? console.log("statek zniszczony") : console.log("Statek ma "+this.health+" zdrowia")
    }
    getDamage(ammount){
        this.health -= ammount
        console.log("Stan statku: "+this.checkHealth())
    }
    makeDamage(enemyShip){
        enemyShip.health -= this.strength
        // console.log("Atak")
        // console.log("Stan atakującego: "+this.health)
        // console.log("Stan dostającego: "+enemyShip.health)
    }
}

class CreateRebelShip extends Ship{
    constructor(position,strength,health,faction = 'Rebel Alliance'){
        super(position,strength,health,'Rebel Alliance')
    }

    hyperspeed() {
        this.position = undefined
    }
}

class DeathStar extends Ship{
    constructor(position){
        super('Empire', position,100,100)
        this.deathRayAvailable = true
    }
    // makeDamage(enemyShip){
    //     return new Promise((resolve, reject) => {
    //         if(this.deathRayAvailable) {
    //             resolve(super.makeDamage(enemyShip))
    //             console.log("Statek Rebelii otrzymał obrażenia rowne: "+this.strength)
    //             this.deathRayAvailable=false
    //             setTimeout(() => {
    //                 this.resetDeathRay()
    //             },3 * 1000)
    //         }
    //         else reject("deathRay niedostępny")
    //     })
    // }
    //dlaczego tutaj promise?
    makeDamage(enemyShip){
        if(this.deathRayAvailable){
                super.makeDamage(enemyShip)
                console.log("Statek Rebelii otrzymał obrażenia rowne: "+this.strength)
                this.deathRayAvailable=false
                setTimeout(() => {
                    this.resetDeathRay()
                },3 * 1000)
        }
    }

    resetDeathRay(){
        this.deathRayAvailable = true
        console.log("deathRay dostępny")
    }

}

const ship1 = new Ship("ug", new Vector2(15,20),5,30)
const ship2 = new Ship("ug", new Vector2(15,20),30,30)
const enemyShip = new CreateRebelShip(new Vector2(15, 21), 20, 20)
const deathStar = new DeathStar(new Vector2(10, 10));

// ship1.makeDamage(ship2)
deathStar.makeDamage(enemyShip)
// .then(() =>
// //   deathStar.makeDamage(enemyShip)
// );

// deathStar.makeDamage(enemyShip).catch((err) => {
//   console.log(err);
// });


// const Vector = new Vector2(3,4)
// const VectorDrugi = new Vector2(3,4)
// console.log(Vector.toString()); 
// // x: 3 y: 4
// Vector.diff(VectorDrugi);
// console.log(Vector.toString()); 
// // x: 5 y: 7