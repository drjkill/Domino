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
import { IStone } from "../Interface/IStone.js";

//=================================================================================================

export class Round {
     gameArea: Array<IStone>  = []
     players:  Array<Player> = []
     pool: Pool;
    static gameArea: Array<IStone>  = [];
    
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
    setGameArea(gameArea: IStone[]): void {
        this.gameArea = gameArea
    }
    getGameArea():IStone[] {
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
    pushStoneToGameArea(playerStone: IStone){
          if(playerStone.getRightSide() === this.gameArea[0].getLeftSide()){
              this.gameArea.unshift(playerStone);
          }else if(playerStone.getLeftSide() === this.gameArea[this.gameArea.length -1].getRightSide()) {
            this.gameArea.push(playerStone);
          }else {console.log("is nich Digga ")}
    } 
    play() {
        while (this.hasRoundEndet() == false) {
            this.players.forEach(player => {
               const playerStone = player.dropStone()
               if(player.steinPruefen(playerStone) == true) {
                   this.pushStoneToGameArea(playerStone)
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


