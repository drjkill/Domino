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
import { Round } from "./round.js";
import { Pool } from './pool';
import { APlayer } from './APlayer';

//=================================================================================================

export class Player extends APlayer {
    playerName!: string
    points: number = 0
    stone!:Stone
    playerDeck: Array<Stone> = [];
    round!: Round
    pool!:Pool

    constructor(playerName: string) {
        super(playerName);
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

    canDropStone(playerStone:Stone): void {
        if(this.steinPruefen(playerStone)== true) {

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
    
}
//=================================================================================================