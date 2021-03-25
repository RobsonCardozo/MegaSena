let megaSenaDraw = [];

let firstNumber = Math.ceil(Math.random() * 60);
let secondNumber = Math.ceil(Math.random() * 60);
let thirdNumber = Math.ceil(Math.random() * 60);
let fourthNumber = Math.ceil(Math.random() * 60);
let fifthNumber = Math.ceil(Math.random() * 60);
let sixthNumber = Math.ceil(Math.random() * 60);

megaSenaDraw.push(firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber, sixthNumber);

let michelPereiraGame = [7, 20, 45, 18, 32, 60];

// Como conferir o jogo da mega?
let numberOfHits = 0;

for (let index = 0; index < megaSenaDraw.length; index += 1) {
  let drawNumber = megaSenaDraw[index];

  for (let gameIndex = 0; gameIndex < michelPereiraGame.length; gameIndex += 1) {
    let gameNumber = michelPereiraGame[gameIndex];

    // gameNumber tem que ser IGUAL ao drawNumber
    if (gameNumber === drawNumber) {
      numberOfHits += 1;
    }

  }
 }


console.log('Sorteio da mega: ' + megaSenaDraw);
console.log('Jogo do Michel: ' + michelPereiraGame);
console.log('O total de acertos foi: ' + numberOfHits);