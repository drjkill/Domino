import { Stone } from '../Interface/stone';
import { IPlayer } from "../Interface/IPLayer";
import { Round } from "./round.js";
import { Pool } from './pool';


//=================================================================================================

export class Player implements IPlayer {
    playerName: string
    points: number = 0
    playerDeck: Array<Stone> = [];
    pool!:Pool
    stone!: Stone
    constructor(playerName: string, points: number) {
        this.playerName = playerName
        this.points = points
        return this;
    }
    getplayer(): IPlayer {
        return <IPlayer>{ playerName: this.playerName, points: this.points }
    }
    setPlayerDeck(playerDeck: Stone[]) {
        this.playerDeck = playerDeck
    }
    getPlayerDeck() {
        return this.playerDeck

    }
    playStone() {
        const action = this.playerDeck.forEach(stone => {
            while (this.playerDeck.length > 0) {
                console.table(this.playerDeck)
                this.playerDeck.splice(0,stone)
                console.log(this.playerName + "drop Stone!")
            }
           })
        return action
    }
    addPoints(point: number): number {
        return this.points += point
    }
}

//=================================================================================================

const player = new Player("Testplayer", 1)
//console.log(player)
//console.log(player.getplayer())
//console.log(player.getplayerDeck())
//console.log(player.playStone())
//console.log(player.addPoints(1))



/**
 * 
            const action = player.playerDeck.forEach(stone => {              
                if (player.playerDeck.length != null) {                      
                    if (stone.rightSide == this.gameArea[stone].leftSide) {
                        this.gameArea.unshift(player.playerDeck[stone])       
                        player.playerDeck.splice(stone, 1)                    
                    } else if (stone.leftSide == this.gameArea[this.gameArea.length - 1].rightSide) { 
                        this.gameArea.push()                            
                        player.playerDeck.splice(stone,1)                     
                    } else {                                            
                        if (this.pool.pool.length != null) {            
                            player.playerDeck.push(this.pool.pool[stone])         
                            this.pool.splice(stone, 1)                  
                        } else {
                            console.log("Pool is empty!!")
                        }
                    }
                }else {
                    console.log(player + "Wins!")
                }
            })
    
 */