import { IPlayer } from "../Interface/IPLayer";
import { Stone } from "../Interface/stone";
<<<<<<< HEAD
import { Round } from "./round.js";
export abstract class APlayer implements IPlayer{

=======

export abstract class APlayer implements IPlayer{
>>>>>>> main
    playerName: string;
    points: number ;
    playerDeck: Array<Stone> = [];

    constructor(playerName: string) {
        this.playerName = playerName 
        this.points = 0                     
        return this;
    }
    getPlayerName(){
<<<<<<< HEAD
        return this.playerName
=======
        return this.playerN
>>>>>>> main
    }
    setPlayerDeck(playerDeck: Stone[]) {
        this.playerDeck = playerDeck
    }
     isDeckEmpty(): boolean {
        return this.playerDeck.length === 0
    }
    steinPruefen(playerStone:Stone ):boolean {
<<<<<<< HEAD
        if(playerStone.rightSide === Round.gameArea[0].leftSide){
=======
        if(playerStone.rightSide === round.gameArea[0].leftSide){
>>>>>>> main
            return true
        }else if(playerStone.leftSide === this.gameArea[this.gameArea.length -1].rightSide) {
            return true
        }else {console.log("is nich Digga ")
            return false
        }
    }
    reciveStone():Stone {
        console.log(this.playerName + " recieved a Stone!")
        let stone = this.playerDeck.push()
        return this.stone
    }
     addPoints():number {
        let roundPoint = 0       
        for( let i = 0; i < this.playerDeck.length; i++) {
            const stonepoints = this.playerDeck[i].leftSide + this.playerDeck[i].rightSide  
             roundPoint +=stonepoints                              
        }         
        return this.points += roundPoint       
    }
}