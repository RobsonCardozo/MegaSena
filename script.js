let megaSenaDraw = [];
let game = [4, 8, 15, 16, 23, 42];

function random() {
  for (let i = 0; i < 6; i += 1) {
      if (megaSenaDraw[i] === megaSenaDraw[i]) megaSenaDraw[i] = Math.ceil(Math.random() * 60);
      else megaSenaDraw[i] = Math.ceil(Math.random() * 60);
  }
  megaSenaDraw = megaSenaDraw.sort((a, b) => a - b);
  return megaSenaDraw;
};

let numberOfHits = 0;

while (numberOfHits < 6) {
  random();
  for (let j = 0; j < megaSenaDraw.length; j += 1) {
    let drawNumber = megaSenaDraw[j];
    for (let k = 0; k < game.length; k += 1) {
      let gameNumber = game[k];
      if (gameNumber === drawNumber) {
        numberOfHits += 1;
      }
    }
  }
  if (numberOfHits === 6) break;
  else (numberOfHits = 0);
}

console.log('Resultado da MegaSena: ' + megaSenaDraw);
console.log('Jogo: ' + game);
console.log('Total de acertos: ' + numberOfHits);
