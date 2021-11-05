import { Pool } from "./pool.js";
import { Player } from "./player.js";
import { Stone } from "../Interface/stone.js";

export class Round {
    gameArea: Array<Stone> = []
    players: Array<Player> = []
    pool: Pool;
    winner!: Player;
    constructor() {
        this.addPlayer(new Player("p1",1))
        this.addPlayer(new Player("p2",2))
        this.addPlayer(new Player("c1",3))
        this.addPlayer(new Player("c2",4))
        const pool = new Pool()
        this.pool = pool
        this.setUpDeck()
        this.setUpGameArea()
       
    }
    setUpDeck(){
        this.players.forEach(player =>{
            player.setDeck(this.pool.getDeck())
        })
    }
    setUpGameArea(){
        this.setGameArea(this.pool.getGameArea())
    }
    setGameArea(gameArea:Stone[]){
        this.gameArea = gameArea
    }
    getGameArea(){
        console.table(this.gameArea)
        return this.gameArea

    }
    getPool(): Pool {
        return this.pool;
    }
    addPlayer(player: Player): Player {
        this.players.push(player)
         return player
    }
    getWinner():void{
        let best = this.players.sort(function (a:Player, b:Player) {
            return (a.points as number) - (b.points as number);
        });
        console.log("Winner: " + best[0].playerName + "  Points: " + best[0].points) 
    }
}
