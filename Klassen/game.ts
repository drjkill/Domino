/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 22/11/2021 - 15:47:49
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 22/11/2021
    * - Author          : 
    * - Modification    : 
**/
import { Player } from "./player.js";
import { Round } from "./round.js";

//=================================================================================================

export class Game {
    rounds:  Array<Round> =  []
    players: Array<Player> = []
    winner!: Player;

    constructor(roundNumber:number) {
        this.addPlayer(new Player("p1"))
        this.addPlayer(new Player("p2"))
        this.addPlayer(new Player("c1"))
        this.addPlayer(new Player("c2"))
        for(let i = 1; i <= roundNumber; i++){
        const round = new Round(this.players)
        this.rounds.push(round)
        }        
    }
     addPlayer(player:Player):Player {
        this.players.push(player)
        return player;
    }
     getplayer() {
        return this.players;
    }
     getWinner():void{
        let best = this.players.sort(function (a:Player, b:Player) {
            return (a.points as number) - (b.points as number);
        });
        console.log("Winner: " + best[0].playerName + "  Points: " + best[0].points) 
    }
            
} 

//=================================================================================================


//const game = new Game(1);
//console.log("Game-Round")
//console.table(game.rounds);
//console.table(game.rounds[0]);
//console.log("Game-Area")
//console.table(game.rounds[0].gameArea);
//console.log("Game-Players")
//console.table(game.rounds[0].players);
console.table(game.rounds[0].play());
//console.log("Round-Pool")
//console.table(game.rounds[0].pool.showStones());
//console.table(game.rounds);
//console.table(game.rounds[0].players[1].points);