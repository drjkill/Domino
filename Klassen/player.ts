/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 22/11/2021 - 15:43:10
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 22/11/2021
    * - Author          : 
    * - Modification    : 
**/
import { Stone } from '../Interface/stone';
import { IPlayer } from "../Interface/IPLayer";
//import { Round } from "./round.js";
//import { Pool } from './pool';

//=================================================================================================

export class Player implements IPlayer {
    static isDeckEmpty() {
        throw new Error("Method not implemented.");
    }
    playerName: string
    points: number = 0
    stone!:Stone
    playerDeck: Array<Stone> = [];
    

    constructor(playerName: string) {
        this.playerName = playerName              
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