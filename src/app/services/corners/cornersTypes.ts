export class Match {
    home: Teams;
    homeCorners: number;
    away: Teams;
    awayCorners: number;
}

/****
 * team represented as a value in an array of 0, 1s.
 * e.g. 1,0,0,0,0,0,0,0,0,0
 */
export class MatchNumeric {
    home: Array<number>;
    homeCorners: number;
    away: Array<number>;
    awayCorners: number;
    constructor(home: Array<number>, homeCorners: number, away: Array<number>, awayCorners: number) {
        this.home = home;
        this.homeCorners = homeCorners;
        this.away = away;
        this.awayCorners = awayCorners;
    }
}

export class MatchTestResult {
    team: Teams;
    homeAccuracy: number;
    awayAccuracy: Number
} 

export enum Teams {
    Arsenal = 'Arsenal',
    AstonVilla = 'AstonVilla',
    Bournemouth = 'Bournemouth',
    Brighton = 'Brighton',
    Burnley = 'Burnley',
    Chelsea = 'Chelsea',
    CrystalPalace = 'CrystalPalace',
    Everton = 'Everton',
    Leicester = 'Leicester',
    Liverpool = 'Liverpool',
    ManCity = 'ManCity',
    ManUtd = 'ManUtd',
    Newcastle = 'Newcastle',
    Norwich = 'Norwich',
    SheffUtd = 'SheffUtd',
    Southampton = 'Southampton',
    Spurs = 'Spurs',
    Watford = 'Watford',
    WestHam = 'WestHam',
    Wolves = 'Wolves'

}