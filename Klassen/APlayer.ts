import { IPlayer } from "../Interface/IPLayer";
import { IStone } from "../Interface/IStone";
import { Round } from "./round";
export abstract class APlayer implements IPlayer{
    playerName: string;
    points: number ;
    playerDeck: Array<IStone> = [];
    stone!: IStone;

    constructor(playerName: string) {
        this.playerName = playerName 
        this.points = 0                     
        return this;
    }
    getPlayerName(){
        return this.playerName
    }
    setPlayerDeck(playerDeck: IStone[]) {
        this.playerDeck = playerDeck
    }
     isDeckEmpty(): boolean {
        return this.playerDeck.length === 0
    }
    steinPruefen(playerStone:IStone ):boolean {
        if(playerStone.getRightSide() === Round.gameArea[0].getLeftSide()){
            return true
        }else if(playerStone.getLeftSide() === Round.gameArea[Round.gameArea.length -1].getRightSide()) {
            return true
        }else {console.log("is nich Digga ")
            return false
        }
    }
    reciveStone():IStone {
        console.log(this.playerName + " recieved a Stone!")
        let stone = this.playerDeck.push()
        return this.stone
    }
    addPoints():number{return 0}

}