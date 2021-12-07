/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 22/11/2021 - 15:47:04
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 22/11/2021
    * - Author          : 
    * - Modification    : 
**/


import { IStone } from "../Interface/IStone";
import { Player } from "./player";
import { Stone }  from "./stone";

//=================================================================================================

export class Pool {
    pool: Array<IStone> = []
    constructor() {
        for (let leftSide = 0; leftSide <= 4; leftSide++) {
            for (let rightSide = 0; rightSide <= 4; rightSide++) {
                const stone: IStone = new Stone(leftSide, rightSide);
                this.pool.push(stone);                
            }
        }
        this.pool.forEach(stone => {
            //console.table("[ " + stone.leftSide + " | " + stone.rightSide + " ]");
          })
    }
    getPlayerDeck():IStone[] {
        const playerDeck:IStone[] = []
        for (let i = 0; i <= 4; i++) {
            const stone:number = Math.floor(Math.random() * this.pool.length);
            playerDeck.push(this.pool[stone]);
            this.pool.splice(stone, 1);            
        } 
        return playerDeck   
    }
    getGameArea():IStone[]{
        const gameArea:IStone[] = []
        const stone:number = Math.floor(Math.random() * this.pool.length);
        gameArea.push(this.pool[stone]);
        this.pool.splice(stone, 1);
        return gameArea
    }
     getPlayerStone():IStone | undefined {  
        return this.pool.pop()   
    }     
}

//=================================================================================================


         