import { Stone } from '../Interface/stone';
import { IPlayer } from "../Interface/IPLayer";
import { Round } from "./round.js";
import { Pool } from './pool';

//=================================================================================================

export class Player implements IPlayer {
    playerName: string
    points: number = 0
    stone!:Stone
    playerDeck: Array<Stone> = [];
    

    constructor(playerName: string) {
        this.playerName = playerName 
        this.playerDeck = this.playerDeck              
        return this;
    }
     setPlayerDeck(playerDeck: Stone[]) {
        this.playerDeck = playerDeck
    }
     getPlayerDeck(): Stone[] {
        return this.playerDeck
    }
     isDeckEmpty(): boolean {
        return this.playerDeck.length === 0
    }
     dropStone():Stone | undefined {  
        console.log(this.playerName + " has dropped a Stone!")              
        return this.playerDeck.pop()        
    };
    reciveStone():Stone {
        console.log(this.playerName + " recieved a Stone!")
     
     return this.stone
    }
     addPoints():number {
        let roundPoint = 0       
        for( let i = 0; i < this.playerDeck.length; i++) {
            const stonepoints = this.playerDeck[i].leftSide + this.playerDeck[i].rightSide  
             roundPoint +=stonepoints                              
        }         
        return this.points += roundPoint       
    }
}
//=================================================================================================

//const player = new Player("Testplayer", 1)
//console.log(player)
//console.log(player.getplayer())
//console.log(player.getplayerDeck())
//console.log(player.playStone())
//console.log(player.isDeckEmpty())
//console.log(player.addPoints(1))

/**
 if (stone.rightSide == this.round.gameArea[0].leftSide) {
                    this.round.gameArea.unshift(stone);
                    this.playerDeck.splice(index, 1);
                }
                else if (stone.leftSide == this.round.gameArea[this.round.gameArea.length - 1].rightSide) {
                    this.round.gameArea.push();
                    this.playerDeck.splice(index, 1);
                }
                else {
                    if (this.pool.pool.length > 0) {
                        this.playerDeck.push(this.pool.pool[0]);
                        this.pool.pool.splice(0, 1);
                    }
                    else {
                        console.log("Pool is empty!!");
                    }
                }    
        }); return action      
 */