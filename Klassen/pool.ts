
import { Stone } from "../Interface/stone";
import { Round } from "./round";

//=================================================================================================

export class Pool {
    leftSide: number
    rightSide!: number
    pool: Array<Stone> = []
   

    constructor() {
        for (this.leftSide = 0; this.leftSide <= 4; this.leftSide++) {
            for (this.rightSide = 0; this.rightSide <= 4; this.rightSide++) {
                const stone: Stone = {leftSide: this.leftSide, rightSide: this.rightSide};
                this.pool.push(stone);                
            }
        }
        this.pool.forEach(stone => {
            console.table("[ " + stone.leftSide + " | " + stone.rightSide + " ]");
          })
    }
    getPlayerDeck() {
        const playerDeck:Stone[] = []
        for (let i = 0; i <= 4; i++) {
            const stone = Math.floor(Math.random() * this.pool.length);
            playerDeck.push(this.pool[stone]);
            this.pool.splice(stone, 1);            
        } 
        return playerDeck   
    }
    getGameArea(){
        const gameArea:Stone[] = []
        const stone = Math.floor(Math.random() * this.pool.length);
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

const pool = new Pool()
console.log(pool)
console.log(pool.getPlayerDeck())
console.log(pool.getGameArea())
console.log(pool.showStones())



         