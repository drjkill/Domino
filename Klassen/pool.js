export class Pool {
    constructor() {
        this.pool = [];
        for (let leftSide = 0; leftSide <= 4; leftSide++) {
            for (let rightSide = 0; rightSide <= 4; rightSide++) {
                const stone = { leftSide: leftSide, rightSide: rightSide };
                this.pool.push(stone);
            }
        }
        this.pool.forEach(stone => {
        });
    }
    getPlayerDeck() {
        const playerDeck = [];
        for (let i = 0; i <= 4; i++) {
            const stone = Math.floor(Math.random() * this.pool.length);
            playerDeck.push(this.pool[stone]);
            this.pool.splice(stone, 1);
        }
        return playerDeck;
    }
    getGameArea() {
        const gameArea = [];
        const stone = Math.floor(Math.random() * this.pool.length);
        gameArea.push(this.pool[stone]);
        this.pool.splice(stone, 1);
        return gameArea;
    }
    playerGetStone() {
        const stone = Math.floor(Math.random() * this.pool.length);
        this.getPlayerDeck().push(this.pool[stone]);
        this.pool.splice(stone, 1);
        return this;
    }
    getStonePoints() {
        this.pool.forEach(stone => {
            const points = stone.leftSide + stone.rightSide;
            const stonePoint = console.log(points);
            return stonePoint;
        });
    }
}
