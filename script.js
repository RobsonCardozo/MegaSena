function sortearNumerosMegaSena() {
  let megaSenaDraw = [];
  for (let i = 0; i < 6; i += 1) {
      megaSenaDraw[i] = Math.ceil(Math.random() * 60);
  }
  megaSenaDraw = megaSenaDraw.sort((a, b) => a - b);
  return megaSenaDraw;
}

function jogarMegaSena() {
  let game = sortearNumerosMegaSena();
  let megaSenaDraw;
  let numberOfHits = 0;

  while (numberOfHits !== 6) {
      megaSenaDraw = sortearNumerosMegaSena();
      numberOfHits = 0;

      for (let j = 0; j < megaSenaDraw.length; j += 1) {
          let drawNumber = megaSenaDraw[j];
          for (let k = 0; k < game.length; k += 1) {
              let gameNumber = game[k];
              if (gameNumber === drawNumber) {
                  numberOfHits += 1;
              }
          }
      }
  }

  console.log('Resultado da MegaSena: ' + megaSenaDraw);
  console.log('Jogo: ' + game);
  console.log('Total de acertos: ' + numberOfHits);
  return megaSenaDraw;
}

jogarMegaSena();
