// Generate user's game array
let userGame = [];
for (let i = 0; i < 6; i++) {
    userGame.push(Math.floor(Math.random() * 10));
}

// Generate machine's game array
let machineGame = [];
for (let i = 0; i < 6; i++) {
    machineGame.push(Math.floor(Math.random() * 10));
}

// Compare the two arrays and count the number of matching numbers
let matches = 0;
for (let i = 0; i < 6; i++) {
    if (userGame[i] === machineGame[i]) {
        matches++;
    }
}

// Print the result to the screen
console.log(`Seu jogo: ${userGame}`);
console.log(`Números sorteados: ${machineGame}`);
console.log(`You got ${matches} matches!`);
