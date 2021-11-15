import { Player } from "./player.js";
import { Round } from "./round.js";

//=================================================================================================

export class Game {
    rounds:Array<Round> = []
    players:Array<Player> = []
    constructor(roundNumber:number) {
        this.addPlayer(new Player("p1",3))
        this.addPlayer(new Player("p2",5))
        this.addPlayer(new Player("c1",0))
        this.addPlayer(new Player("c2",2))
        for(let i = 1; i <= roundNumber; i++){
        const round = new Round(this.players)
        this.rounds.push(round)
        }        
    }
    addPlayer(player:Player):Player {
        this.players.push(player)
        return player;
    }
    getWinner():void{
        let best = this.players.sort(function (a:Player, b:Player) {
            return (a.points as number) - (b.points as number);
        });
        console.log("Winner: " + best[0].playerName + "  Points: " + best[0].points) 
    }
            
} 

//=================================================================================================


const game = new Game(1);
//console.log("Game-Round")
//console.table(game.rounds);
//console.table(game.rounds[0]);
//console.log("Game-Area")
//console.table(game.rounds[0].gameArea);
//console.log("Game-Players")
//console.table(game.rounds[0].players);
//console.log("Round-Pool")
//console.table(game.rounds[0].pool.showStones());
