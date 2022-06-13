const grupuj = (funTab1, funTab2, cb) => { 
    
};
const callback = (array) => {
    console.log("wynik: "+array)
}
const func1 = (x, cb) => {
    setTimeout(() => {
      console.log("Funkcja 1 z pierwszej tablicy");
      // inkrementujemy x
      cb(x + 1);
    }, 3000);
}
const func2 = (x, cb) => {
    setTimeout(() => {
      console.log("Funkcja 2 z pierwszej tablicy");
      // inkrementujemy x
      cb(x + 2);
    }, 2000);
}
const func3 = (x, cb) => {
    setTimeout(() => {
      console.log("Funkcja 3 z pierwszej tablicy");
      // inkrementujemy x
      cb(x + 3);
    }, 1000);
}

const func11 = (x, cb) => {
    setTimeout(() => {
      console.log("Funkcja 1 z drugiej tablicy");
      // inkrementujemy x
      cb(x - 3);
    }, 3000);
}
const func22 = (x, cb) => {
    setTimeout(() => {
      console.log("Funkcja 2 z drugiej tablicy");
      // inkrementujemy x
      cb(x - 2);
    }, 2000);
}
const func33 = (x, cb) => {
    setTimeout(() => {
      console.log("Funkcja 3 z drugiej tablicy");
      // inkrementujemy x
      cb(x - 3);
    }, 1000);
}
const funTab1 = [func1,func2,func3]
const funTab2 = [func11,func22,func33]






