import * as CornerTypes from './cornersTypes';

const Teams = CornerTypes.Teams;

export const matchesToForecast: CornerTypes.Match[] = [
]

export function convertTeamNameTo20DArray(team: CornerTypes.Teams): Array<number> {
    switch (team) {
      case CornerTypes.Teams.Aberdeen:
        return [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      case CornerTypes.Teams.Celtic:
        return [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; 
      case CornerTypes.Teams.Dundee:
        return [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      case CornerTypes.Teams.DundeeUtd:
        return [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]; 
      case CornerTypes.Teams.Hearts:
        return [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0];
      case CornerTypes.Teams.Hibs:
        return [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0]; 
      case CornerTypes.Teams.Livingston:
        return [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0];
      case CornerTypes.Teams.Motherwell:
        return [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0]; 
      case CornerTypes.Teams.Rangers:
        return [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0];
      case CornerTypes.Teams.RossCounty:
        return [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0]; 
      case CornerTypes.Teams.StJohnston:
        return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0];
      case CornerTypes.Teams.StMirren:
        return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]; 
      
      default:
        console.log('not a recognised team');
    }
  }

export const cornerData: CornerTypes.Match[] = [
    //31/07/2021
    {
        home : Teams.Rangers,
        homeCorners: 7,
        away: Teams.Livingston,
        awayCorners: 1
    },
    {
        home : Teams.Dundee,
        homeCorners: 8,
        away: Teams.StMirren,
        awayCorners: 11
    },
    {
        home : Teams.RossCounty,
        homeCorners: 0,
        away: Teams.StJohnston,
        awayCorners: 4
    },
    {
        home : Teams.Hearts,
        homeCorners: 6,
        away: Teams.Celtic,
        awayCorners: 5
    },
    //01/08/2021
    {
        home : Teams.Aberdeen,
        homeCorners: 5,
        away: Teams.DundeeUtd,
        awayCorners: 4
    },
    {
        home : Teams.Motherwell,
        homeCorners: 2,
        away: Teams.Hibs,
        awayCorners: 4
    },
]