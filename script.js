//obs: código originalmente escrito pelo Professor Gabriel Oliva e modificado por mim, Robson Cardozo.

let megaSenaDraw = [];
let game = [04, 08, 15, 16, 23, 42];

for (let i = 0; i < 6; i += 1) {
  megaSenaDraw[i] = Math.ceil(Math.random() * 60);
}

let megaSena = megaSenaDraw.sort();

// Como conferir o jogo da mega?
let numberOfHits = 0;

//while (numberOfHits < 6) {
  for (let j = 0; j < megaSena.length; j += 1) {
    let drawNumber = megaSena[j];
      for (let k = 0; k < game.length; k += 1) {
        let gameNumber = game[k];
        // gameNumber tem que ser IGUAL ao drawNumber
        if (gameNumber === drawNumber) {
         numberOfHits += 1;
        }
      }
   }
  //if (numberOfHits === 6) numberOfHits = 6;
  //else numberOfHits = 0;


console.log('Sorteio da mega: ' + megaSena);
console.log('Jogo: ' + game);
console.log('O total de acertos foi: ' + numberOfHits);