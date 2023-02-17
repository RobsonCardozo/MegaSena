function sortearNumerosMegaSena() {
  let megaSenaDraw = [];
  for (let i = 0; i < 6; i += 1) {
    megaSenaDraw[i] = Math.ceil(Math.random() * 60);
  }
  megaSenaDraw = megaSenaDraw.sort((a, b) => a - b);
  return megaSenaDraw;
}

function jogarMegaSena() {
  let game = [4, 8, 15, 16, 23, 42];
  let numberOfHits = 0;

  while (numberOfHits !== 6) {
    let megaSenaDraw = sortearNumerosMegaSena();
    numberOfHits = 0;

    for (let j = 0; j < megaSenaDraw.length; j += 1) {
      let drawNumber = megaSenaDraw[j];
      if (game.includes(drawNumber)) {
        numberOfHits += 1;
      }
    }
  }

  console.log('Resultado da MegaSena: ' + megaSenaDraw);
  console.log('Jogo: ' + game);
  console.log('Total de acertos: ' + numberOfHits);
  }
  
  jogarMegaSena();