import { Game } from './Klassen/game.js';
const game = new Game(4);
//console.table(game.rounds[3].getPool().getStones());
//console.table(game.rounds[1].players[2]);
console.log(JSON.stringify(game.rounds[1].players[1].deck))