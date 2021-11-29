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


    canDropStone(playerStone:Stone) {
        if(this.round.steinPruefen(playerStone)== true) {
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