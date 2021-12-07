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
import { IStone } from '../Interface/IStone';
import { IPlayer } from "../Interface/IPLayer";
import { Round } from "./round.js";
import { Pool } from './pool';
import { APlayer } from './APlayer';

//=================================================================================================

export class Player extends APlayer {
    playerName!: string
    points: number = 0
    playerDeck: Array<IStone> = [];     

    constructor(playerName: string) {
        super(playerName);
        this.playerName = playerName              
        return this;
    }
     setPlayerDeck(playerDeck: IStone[]) {
        this.playerDeck = playerDeck
    }
     getPlayerDeck(): IStone[] {
        return this.playerDeck
    }
     isDeckEmpty(): boolean {
        return this.playerDeck.length === 0
    }
    canDropStone(playerStone:IStone): void {
        if(this.steinPruefen(playerStone)== true) {
            this.dropStone()
        }
        else{
            this.reciveStone()
        }
    }
     dropStone():IStone {          
        console.log(this.playerName + " has dropped a Stone!")              
        const playerStone = this.playerDeck.pop() 
        if(!playerStone) {// wenn stone is undefined(false)
            throw new Error('keine Steine mehr');
        }
         return playerStone     
    };
   /* reciveStone() {
        if() {// wenn stone is undefined(false)
            throw new Error('keine Steine mehr');
        }
    }*/
    
}
//=================================================================================================