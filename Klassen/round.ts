import { Pool } from "./pool.js";
import { Player } from "./player.js";
import { Stone } from "../Interface/stone.js";

//=================================================================================================

export class Round {
     private gameArea: Array<Stone>  = []
     private players:  Array<Player> = []
     private deck:     Array<Stone>  = []
     private pool: Pool;

    constructor(players: Player[]) {
        this.players = players
        const pool   = new Pool()
        this.pool    = pool
        this.setUpDeck()
        this.setUpGameArea()
    }
    private setUpDeck() {
        this.players.forEach(player => {
            player.setPlayerDeck(this.pool.getPlayerDeck())
        })
    }
    private setUpGameArea() {
        this.setGameArea(this.pool.getGameArea())
    }
    private setGameArea(gameArea: Stone[]): void {
        this.gameArea = gameArea
    }
    private getGameArea() {
        return this.gameArea
    }
    private getPool(): Pool {
        return this.pool;
    }
    private addPlayer(player: Player): Player {
        this.players.push(player)
        return player
    }
    private hasRoundEndet(): boolean {
        this.players.forEach(player => {
            console.log(player.playerName + " deck is empty = " + player.isDeckEmpty())
            if (player.isDeckEmpty()) {
                return true;
            }
        });
        return false
    }
    private play() {
        while (this.hasRoundEndet() == false) {
            this.players.forEach(player => {
                player.dropStone()
                console.log(player.playerName + " deck is empty = " + player.isDeckEmpty())
            });
                        
        }
        this.players.forEach(player => {
            player.addPoints()
        });
    }
  
}

//=================================================================================================

//const round = new Round()
//console.log(round)
//console.log(round.setUpDeck())
//console.log(round.setUpGameArea())
//console.log(round.getGameArea())
//console.log(round.getPool())
//console.table(round.play())
//console.log(round.getWinner())


