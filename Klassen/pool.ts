
import { Stone } from "../Interface/stone";
import { Round } from "./round";

//=================================================================================================

export class Pool {
    pool: Array<Stone> = []
    static pool: Pool;
   

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
    getPlayerDeck() {
        const playerDeck:Stone[] = []
        for (let i = 0; i <= 4; i++) {
            const stone:number = Math.floor(Math.random() * this.pool.length);
            playerDeck.push(this.pool[stone]);
            this.pool.splice(stone, 1);            
        } 
        return playerDeck   
    }
    getGameArea(){
        const gameArea:Stone[] = []
        const stone:number = Math.floor(Math.random() * this.pool.length);
        gameArea.push(this.pool[stone]);
        this.pool.splice(stone, 1);
        return gameArea
    }
    getStonePoints() {
        this.pool.forEach(stone => {
            const points =  stone.leftSide + stone.rightSide;
            const stonePoint =console.log(points)
            return stonePoint
        });
    }
    showStones() {        
        this.pool.forEach(stone => {
          console.log("[ " + stone.leftSide + " | " + stone.rightSide + " ]");
        }) 

    }
}

//=================================================================================================

//const pool = new Pool()
//console.log(pool)
//console.log(pool.getPlayerDeck())
//console.log(pool.getGameArea())
//console.log(pool.showStones())



         