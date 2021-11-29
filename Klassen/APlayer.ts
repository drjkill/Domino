import { IPlayer } from "../Interface/IPLayer";
import { Stone } from "../Interface/stone";

export abstract class APlayer implements IPlayer{
    playerName: string;
    points: number ;
    playerDeck: Array<Stone> = [];

    constructor(playerName: string) {
        this.playerName = playerName 
        this.points = 0                     
        return this;
    }
    getPlayerName(){
        return this.playerN
    }
    setPlayerDeck(playerDeck: Stone[]) {
        this.playerDeck = playerDeck
    }
     isDeckEmpty(): boolean {
        return this.playerDeck.length === 0
    }
    steinPruefen(playerStone:Stone ):boolean {
        if(playerStone.rightSide === round.gameArea[0].leftSide){
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