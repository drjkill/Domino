import { Pool } from "./pool.js";
import { Player } from "./player.js";
import { Stone } from "../Interface/stone.js";

//=================================================================================================

export class Round {
    private gameArea: Array<Stone> = []
    private players: Array<Player> = []
    private pool: Pool;
    private deck: Array<Stone> = []
    private winner!: Player;

    constructor(players: Player[]) {
        this.players = players
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
    hasRoundEndet(): boolean {
        this.players.forEach(player => {
            if (player.isDeckEmpty()) {
                return true;
            }
        });
        return false
    }
    play() {
        while (this.hasRoundEndet() == false) {
            this.players.forEach(player => {
                player.dropStone()
            });
        }
        this.players.forEach(player => {
            player.addPoints()
        });
    }
  
}

//=================================================================================================

//const round = new Round()
//console.log(round)
//console.log(round.setUpDeck())
//console.log(round.setUpGameArea())
//console.log(round.getGameArea())
//console.log(round.getPool())
//console.table(round.play())
//console.log(round.getWinner())


