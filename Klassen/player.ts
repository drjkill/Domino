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
<<<<<<< HEAD
//import { Round } from "./round.js";
//import { Pool } from './pool';
=======
import { Round } from "./round.js";
import { Pool } from './pool';
import { setUncaughtExceptionCaptureCallback } from 'process';
>>>>>>> 1d5a434cfd9c891544525db8626f8583404bf583

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
    canDropStone(playerStone:Stone) {
        if() {
            this.dropStone()
        }
        else{
            this.reciveStone()
        }
    }
     dropStone():Stone {          
        console.log(this.playerName + " has dropped a Stone!")              
        const playerStone = this.playerDeck.pop() 
        if(!playerStone) {// wenn stone is undefined(false)
            throw new Error('keine Steine mehr');
        }
         return playerStone
     
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