import { Pool } from "./pool.js";
import { Player } from "./player.js";
import { Stone } from "../Interface/stone.js";

//=================================================================================================

export class Round {
    gameArea: Array<Stone> = []
    players: Array<Player> = []
    pool: Pool;
    deck: Array<Stone> = []
    winner!: Player;
    constructor() {
        this.addPlayer(new Player("p1", 1))
        this.addPlayer(new Player("p2", 2))
        this.addPlayer(new Player("c1", 3))
        this.addPlayer(new Player("c2", 4))
        const pool = new Pool()
        this.pool = pool
        this.setUpDeck()
        this.setUpGameArea()

    }
    setUpDeck() {
        this.players.forEach(player => {
            player.setPlayerDeck(this.pool.getPlayerDeck())
        })
    }
    setUpGameArea() {
        this.setGameArea(this.pool.getGameArea())
    }
    setGameArea(gameArea: Stone[]): void {
        this.gameArea = gameArea
    }
    getGameArea() {
        return this.gameArea

    }
    getPool(): Pool {
        return this.pool;
    }
    addPlayer(player: Player): Player {
        this.players.push(player)
        return player
    }
    play() {

        this.players.forEach(player => {
            console.log(player.playerDeck)
            if (player.playerDeck.length > 0) {
                const action = this.deck.forEach(stone => {                    
                    if (stone.rightSide === this.gameArea[0].leftSide) {
                        console.log(stone)
                    }
                    else if (stone.leftSide == this.gameArea[this.gameArea.length - 1].rightSide) {

                    }
                    else {
                        if (this.pool.pool.length > 0) {

                        } else {
                            console.log("Pool is empty!!")
                        }
                    }
                }); return action
            }
            else {
                console.log(player.playerName + "Wins!")
            }
        })
    }
    getWinner(): void {
        let best = this.players.sort(function (a: Player, b: Player) {
            return (a.points as number) - (b.points as number);
        });
        console.log("Winner: " + best[0].playerName + "  Points: " + best[0].points)
    }
}

//=================================================================================================

const round = new Round()
//console.log(round)
//console.log(round.setUpDeck())
//console.log(round.setUpGameArea())
//console.log(round.getGameArea())
//console.log(round.getPool())
console.log(round.play())
//console.log(round.getWinner())


/**
 *     play() :void{
        this.players.forEach(player => {                                // für jeden player in players....
            const action = player.deck.forEach(stone => {               // ... aktion = für jeden Stein in player.deck
                if (player.deck.length != null) {                       // wenn das deck nicht leer ist
                    if (stone.rightSide == this.gameArea[stone].leftSide) { // wenn die rechte seite vom Player-Stein den gleichen Wert hat wie die linke seite vom Spielfeld-Stein
                        this.gameArea.unshift(player.deck[stone])       // füge links den Stein auf position 0 ein und...
                        player.deck.splice(stone, 1)                    // ...entferne Stein aus player.deck
                    } else if (stone.leftSide == this.gameArea[this.gameArea.length - 1].rightSide) { //sonst wenn die linke seite vom Player-Stein den gleichen Wert hat wie die rechte seite vom Spielfeld-Stein
                        this.gameArea.push()                            // füge rechts den Stein als letzten im Array ein
                        player.deck.splice(stone,1)                     // entferne Stein aus player.deck
                    } else {                                            // sonst
                        if (this.pool.pool.length != null) {            // wenn der pool noch nicht leer ist
                            player.deck.push(this.pool.pool[stone])         // füge den ersten stein aus pool in player.deck ein und...
                            this.pool.splice(stone, 1)                  // ...entferne Stein aus pool
                        } else {
                            console.log("Pool is empty!!")
                        }
                    }
                }else {
                    console.log(player + "Wins!")
                }
            })
        })
    }
 */