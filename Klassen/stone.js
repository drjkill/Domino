export class Stone {
    constructor(leftSide, rightSide) {
        this.leftSide = leftSide;
        this.rightSide = rightSide;
        this.stonePoints = this.leftSide + this.rightSide;
    }
    getLeftSide() {
        return this.leftSide;
    }
    ;
    getRightSide() {
        return this.rightSide;
    }
    ;
    getStonePoints() {
        return this.stonePoints;
    }
    ;
}
