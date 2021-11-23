/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 22/11/2021 - 15:51:30
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 22/11/2021
    * - Author          : 
    * - Modification    : 
**/
import { Pool } from "./pool.js";
import { Player } from "./player.js";
import { Stone } from "../Interface/stone.js";

//=================================================================================================

export class Round {
     gameArea: Array<Stone>  = []
     players:  Array<Player> = []
     deck:     Array<Stone>  = []
     pool: Pool;

    constructor(players: Player[]) {
        this.players = players
        const pool   = new Pool()
        this.pool    = pool
        this.setUpDeck()
        this.setUpGameArea()
    }
    setUpDeck() {
        this.players.forEach(player => {
            player.setPlayerDeck(this.pool.getPlayerDeck())
        })
    }
    setUpGameArea() {
        this.setGameArea(this.pool.getGameArea())
    }
    setGameArea(gameArea: Stone[]): void {
        this.gameArea = gameArea
    }
    getGameArea() {
        return this.gameArea
    }
    getPool(): Pool {
        return this.pool;
    }
    addPlayer(player: Player): Player {
        this.players.push(player)
        return player
    }
    hasRoundEndet(): boolean {
        this.players.forEach(player => {
            console.log(player.playerName + " deck is empty = " + player.isDeckEmpty())
            if (player.isDeckEmpty()) {
                return true;
            }
        });
        return false
    }
    play() {
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


