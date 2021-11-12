import { Game } from './Klassen/game.js';
const game = new Game(4);
console.table(game.rounds[3].getPool().showStones());
console.table(game.rounds[1].players[2]);
