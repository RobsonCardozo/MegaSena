//obs: código originalmente escrito pelo Professor Gabriel Oliva e modificado por mim, Robson Cardozo.

let megaSenaDraw = [];
let game = [01, 05, 10, 12, 15, 20];

function random() {
  for (let i = 0; i < 6; i += 1) {
    megaSenaDraw[i] = Math.ceil(Math.random() * 20);
  }
  megaSenaDraw = megaSenaDraw.sort();
  return megaSenaDraw;
}

// Como conferir o jogo da mega?
let numberOfHits = 0;

while (numberOfHits < 6) {
  random();
  for (let j = 0; j < megaSenaDraw.length; j += 1) {
    let drawNumber = megaSenaDraw[j];
      for (let k = 0; k < game.length; k += 1) {
        let gameNumber = game[k];
        // gameNumber tem que ser IGUAL ao drawNumber
      if (gameNumber === drawNumber) {
         numberOfHits += 1;
      }
    }
  }
  if (numberOfHits === 6) numberOfHits = 6;
  else numberOfHits = 0;
}

console.log('Sorteio da mega: ' + megaSenaDraw);
console.log('Jogo: ' + game);
console.log('O total de acertos foi: ' + numberOfHits);