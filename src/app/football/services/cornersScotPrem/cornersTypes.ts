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
    Aberdeen = 'Aberdeen',
    Celtic = 'Celtic',
    Dundee = 'Dundee',
    DundeeUtd = 'Dundee Utd',
    Hearts = 'Hearts',
    Hibs = 'Hibs',
    Livingston = 'Livingston',
    Motherwell = 'Mothewell',
    Rangers = 'Rangers',
    RossCounty = 'Ross County',
    StJohnston = 'St Johnston',
    StMirren = 'St Mirren'
}