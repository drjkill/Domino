
import { Stone } from "../Interface/stone";
import { Player } from "./player";
import { Round } from "./round";

//=================================================================================================

export class Pool {
    pool: Array<Stone> = []
    player!:Player
    constructor() {
        for (let leftSide = 0; leftSide <= 4; leftSide++) {
            for (let rightSide = 0; rightSide <= 4; rightSide++) {
                const stone: Stone = {leftSide: leftSide, rightSide: rightSide};
                this.pool.push(stone);                
            }
        }
        this.pool.forEach(stone => {
            //console.table("[ " + stone.leftSide + " | " + stone.rightSide + " ]");
          })
    }
    getPlayerDeck():Stone[] {
        const playerDeck:Stone[] = []
        for (let i = 0; i <= 4; i++) {
            const stone:number = Math.floor(Math.random() * this.pool.length);
            playerDeck.push(this.pool[stone]);
            this.pool.splice(stone, 1);            
        } 
        return playerDeck   
    }
    getGameArea():Stone[]{
        const gameArea:Stone[] = []
        const stone:number = Math.floor(Math.random() * this.pool.length);
        gameArea.push(this.pool[stone]);
        this.pool.splice(stone, 1);
        return gameArea
    }
     playerGetStone(stone: any):Stone[]{
        this.player.playerDeck.push(this.pool[stone]);
        this.pool.splice(stone, 1);
        return this.player.playerDeck
    }
     getStonePoints() {
        this.pool.forEach(stone => {
            const points =  stone.leftSide + stone.rightSide;
            const stonePoint =console.log(points)
            return stonePoint
        });
    }
}

//=================================================================================================


         