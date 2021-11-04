
import { Stone } from "../Interface/stone";

export class Pool {
    leftSide!: number
    rightSide!: number
    pool: Array<Stone> = []

    constructor() {
        for (this.leftSide = 0; this.leftSide <= 4; this.leftSide++) {
            for (this.rightSide = 0; this.rightSide <= 4; this.rightSide++) {
                let stone: Stone = { leftSide: this.leftSide, rightSide: this.rightSide };
                this.pool.push(stone);

            }
        }
        //console.table(this.pool) ;
    }
    getStones() {
        for (let i = 0; i < this.pool.length; i++) {
            console.log("[ " + this.pool[i].leftSide + " | " + this.pool[i].rightSide + " ]");
        } 
        
    }
}
