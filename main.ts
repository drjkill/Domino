import { Pool} from './Klassen/pool.js';
import { Player} from './Klassen/player.js';
import { Game } from './Klassen/game.js';
import { Round } from './Klassen/round.js';
//const readline = require("readline")
//const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

//=======================================================================================
//                              player gets 5 Stones
//=======================================================================================
/*export function player() {
  const deck = []
  for (let i = 0; i <= 4; i++) {
    const stone = Math.floor(Math.random() * pool.length);
    deck.push(pool[stone]);
    pool.splice(stone, 1);
  }
  return deck
}*/
//=======================================================================================
//                              gamefield with first random Stone
//=======================================================================================
/*
export function gamefield() {
  const firststone = Math.floor(Math.random() * pool.length);
  gameArea.push(pool[firststone]);
  pool.splice(firststone, 1);
  return gameArea
}*/
//=======================================================================================
//                                    Domino Game Round up
//=======================================================================================
/*export function roundUp() {
  rl.question('noch eine Runde? ', (answer: string) => {
    switch (answer.toLowerCase()) {
      case 'ja':
        round++;
        if (winner === player1) {
          player1Score++;
          console.table(player1Score);
        }
        else if (winner === player2) {
          player2Score++;
          console.table(player2Score);
        }
        console.log(' Alles klar. Dann Runde' + round);
        break;
      case 'nein':
        console.log('Dann halt nich :(');
        break;
      default:
        console.log('Verarsch mich nich');
        break;
    }
    rl.close()
  })
};*/
//=======================================================================================
//                                     
//=======================================================================================


const game = new Game(4)
console.table(game.rounds[3].getPool().getStones())
console.table(game.rounds[1].players[2])