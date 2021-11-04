export class Pool {
    constructor() {
        this.pool = [];
        for (this.leftSide = 0; this.leftSide <= 4; this.leftSide++) {
            for (this.rightSide = 0; this.rightSide <= 4; this.rightSide++) {
                let stone = { leftSide: this.leftSide, rightSide: this.rightSide };
                this.pool.push(stone);
            }
        }
    }
    getDeck() {
        const deck = [];
        for (let i = 0; i <= 4; i++) {
            const stone = Math.floor(Math.random() * this.pool.length);
            deck.push(this.pool[stone]);
            this.pool.splice(stone, 1);
        }
        return deck;
    }
    getStones() {
        for (let i = 0; i < this.pool.length; i++) {
            console.log("[ " + this.pool[i].leftSide + " | " + this.pool[i].rightSide + " ]");
        }
    }
}
const pool = new Pool();
console.log(pool.getDeck());
