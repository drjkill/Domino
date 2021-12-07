import { IStone } from "../Interface/IStone";

export class Stone implements IStone {
    leftSide: number;
    rightSide: number;
    stonePoints: number
    constructor(leftSide: number, rightSide: number) {
        this.leftSide = leftSide
        this.rightSide = rightSide
        this.stonePoints = this.leftSide + this.rightSide;
    }
    getLeftSide() { 
        return this.leftSide 
    };
    getRightSide() { 
        return this.rightSide 
    };
    getStonePoints(): number {
        return this.stonePoints
    };
}