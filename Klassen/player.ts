import { Stone } from '../Interface/stone';
import { IPlayer } from "../Interface/IPLayer";
import { Round } from "./round.js";
import { Pool } from './pool';

//=================================================================================================

export class Player implements IPlayer {
    playerName: string
    points: number = 0
    playerDeck: Array<Stone> = [];
    pool!:Pool
    round!:Round
    stone!: Stone
    constructor(playerName: string, points: number) {
        this.playerName = playerName
        this.points = points
        return this;
    }
    getplayer(): IPlayer {
        return <IPlayer>{ playerName: this.playerName, points: this.points }
    }
    setPlayerDeck(playerDeck: Stone[]) {
        this.playerDeck = playerDeck
    }
    getPlayerDeck():Stone[] {
        return this.playerDeck
    }
    isDeckEmpty():boolean{
        return this.playerDeck.length == 0
    } 
    
    dropStone() {
        const action = this.playerDeck.forEach((stone, index) => {
            if (this.playerDeck.length > 0) {
                if (stone.rightSide == this.round.gameArea[0].leftSide) {
                    this.round.gameArea.unshift(stone);
                    this.playerDeck.splice(index, 1);
                }
                else if (stone.leftSide == this.round.gameArea[this.round.gameArea.length - 1].rightSide) {
                    this.round.gameArea.push();
                    this.playerDeck.splice(index, 1);
                }
                else {
                    if (this.pool.pool.length > 0) {
                        this.playerDeck.push(this.pool.pool[0]);
                        this.pool.pool.splice(0, 1);
                    }
                    else {
                        console.log("Pool is empty!!");
                    }
                }
            }
            else {
                console.log(this.playerName + "Wins!");
            } 
        }); return action      
    }
    addPoints(point: number): number {
        return this.points += point
    }
}

//=================================================================================================

//const player = new Player("Testplayer", 1)
//console.log(player)
//console.log(player.getplayer())
//console.log(player.getplayerDeck())
//console.log(player.playStone())
//console.log(player.addPoints(1))

