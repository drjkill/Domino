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
        for(let player of this.players){
            
            if (player.isDeckEmpty()) {
                return true;
            }
        };
        return false
    }
    pushStoneToGameArea(playerStone: Stone){
          if(playerStone.rightSide === this.gameArea[0].leftSide){
              this.gameArea.unshift(playerStone);
          }else if(playerStone.leftSide === this.gameArea[this.gameArea.length -1].rightSide) {
            this.gameArea.push(playerStone);
          }else {console.log("is nich Digga ")}
    }
    steinPruefen(playerStone:Stone ):boolean {
        if(playerStone.rightSide === this.gameArea[0].leftSide){
            return true
        }else if(playerStone.leftSide === this.gameArea[this.gameArea.length -1].rightSide) {
            return true
        }else {console.log("is nich Digga ")
            return false
        }
    }
    play() {
        while (this.hasRoundEndet() == false) {
            this.players.forEach(player => {
               const playerStone = player.dropStone()
               if(this.steinPruefen(playerStone) == true)
               {this.pushStoneToGameArea(playerStone)
                console.log(player.playerName + " deck is empty = " + player.isDeckEmpty())}
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


