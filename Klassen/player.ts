import { Stone } from '../Interface/stone';
import { IPlayer } from "../Interface/IPLayer";
import { Round } from "./round.js";
import { Pool } from './pool';
//=================================================================================================

export class Player implements IPlayer{
    points:number = 0
    playerName:string
    deck: Array<Stone> = [];

    constructor(playerName:string,points:number) {
        this.playerName = playerName 
        this.points = points           
        return this;
    }
    getPlayerName(){
        return this.playerName
    }
    getplayer(): IPlayer {
        return <IPlayer>{ playerName: this.playerName, points: this.points }
    }
    setDeck(deck:Stone[]){
        this.deck = deck
    }
    getDeck(){
        return this.deck

    }
    reciveStone(){

    }
    dropStone(){

    }
    addPoints(point:number):number {
        return this.points += point
    }
}

const player = new Player("",1)
console.log(player.deck)