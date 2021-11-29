
export interface IPlayer {
    getPlayerName: () => string
    addPoints:     () => number
    
    // in OO - Pur besser nur methoden statt attribute verwenden
    //playerName: string
    //points:     number
}