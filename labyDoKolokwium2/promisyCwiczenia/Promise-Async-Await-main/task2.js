// Task 2: Create a guessing game.

// User story: User can enter a number
// User story: The system pick a random number from 1 to 6
// User story: If user number is equal to a random number, give user 2 points
// User story: If the user number is different from the random number by 1,
// give the user 1 point, otherwise, give the user 0 points.
// User story: User can decide to play the game as long as they want to

const enterNumber = () => {
    return new Promise((resolve,reject) => {
        const userNumber = Number(window.prompt("Enter a number (1-6): "))
        const randomNumber = Math.floor(Math.random() * 6 + 1);

        if (typeof userNumber !== 'number') {
            reject(new Error("Wrong input"))
        }
        if (userNumber === randomNumber){
            resolve({
                points: 2,
                randomNumber
            })
        }
        
    });
}

const start = () => {
    enterNumber().catch(error => alert(error))
};

start();
