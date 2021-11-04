import { Stone } from '../Interface/stone';
import { IPlayer } from "../Interface/IPLayer";
import { Pool }  from "./pool.js";
//=================================================================================================

export class Player implements IPlayer{
    points:number = 0
    playerName:string
    deck: Array<Stone> = [];

    constructor(playerName:string) {
        this.playerName = playerName    
        return this;
    }
    getPlayerName(){
        return this.playerName
    }
    getplayer(): IPlayer {
        return <IPlayer>{ playerName: this.playerName, points: this.points }
    }
    getDeck(){

    }
    reciveStone(){

    }
    dropStone(){

    }
    addPoints(point:number):number {
        return this.points += point
    }
}


