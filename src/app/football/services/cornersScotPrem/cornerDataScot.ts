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
    //07/08/2022
    {
      home : Teams.DundeeUtd,
      homeCorners: 5,
      away: Teams.Rangers,
      awayCorners: 8
  },
  {
      home : Teams.StMirren,
      homeCorners: 4,
      away: Teams.Hearts,
      awayCorners: 0
  },
  //08/08/2022
  {
    home : Teams.Celtic,
    homeCorners: 11,
    away: Teams.Dundee,
    awayCorners: 3
  },
  {
    home : Teams.Hibs,
    homeCorners: 11,
    away: Teams.RossCounty,
    awayCorners: 4
  },
  {
    home : Teams.Livingston,
    homeCorners: 6,
    away: Teams.Aberdeen,
    awayCorners: 2
  },
  {
    home : Teams.StJohnston,
    homeCorners: 8,
    away: Teams.Motherwell,
    awayCorners: 6
  },
  //21/08/022
  {
    home : Teams.Celtic,
    homeCorners: 15,
    away: Teams.StMirren,
    awayCorners: 0
  },
  {
    home : Teams.Livingston,
    homeCorners: 4,
    away: Teams.Motherwell,
    awayCorners: 8
  },
  //22/08/2022
  {
    home : Teams.Dundee,
    homeCorners: 4,
    away: Teams.Hibs,
    awayCorners: 6
  },
  {
    home : Teams.Hearts,
    homeCorners: 3,
    away: Teams.Aberdeen,
    awayCorners: 3
  },
  {
    home : Teams.RossCounty,
    homeCorners: 2,
    away: Teams.Rangers,
    awayCorners: 11
  },
  {
    home : Teams.StJohnston,
    homeCorners: 7,
    away: Teams.DundeeUtd,
    awayCorners: 4
  },
  //28/08/2022
  {
    home : Teams.DundeeUtd,
    homeCorners: 5,
    away: Teams.Hearts,
    awayCorners: 4
  },
  {
    home : Teams.Hibs,
    homeCorners: 3,
    away: Teams.Livingston,
    awayCorners: 5
  },
  {
    home : Teams.Motherwell,
    homeCorners: 3,
    away: Teams.Dundee,
    awayCorners: 4
  },
  //29/08/2022
  {
    home : Teams.Rangers,
    homeCorners: 4,
    away: Teams.Celtic,
    awayCorners: 4
  },
  {
    home : Teams.Aberdeen,
    homeCorners: 12,
    away: Teams.RossCounty,
    awayCorners: 7
  },
  {
    home : Teams.StMirren,
    homeCorners: 2,
    away: Teams.StJohnston,
    awayCorners: 4
  },
  //11/09/2022
  {
    home : Teams.StJohnston,
    homeCorners: 6,
    away: Teams.Rangers,
    awayCorners: 7
  },
  {
    home : Teams.Celtic,
    homeCorners: 7,
    away: Teams.RossCounty,
    awayCorners: 0
  },
  {
    home : Teams.Dundee,
    homeCorners: 9,
    away: Teams.Livingston,
    awayCorners: 8
  },
  {
    home : Teams.Motherwell,
    homeCorners: 1,
    away: Teams.Aberdeen,
    awayCorners: 6
  },
  {
    home : Teams.StMirren,
    homeCorners: 6,
    away: Teams.DundeeUtd,
    awayCorners: 3
  },
  //12/09/2022
  {
    home : Teams.Hearts,
    homeCorners: 11,
    away: Teams.Hibs,
    awayCorners: 4
  },
  //18/09/2022
  {
    home : Teams.Aberdeen,
    homeCorners: 6,
    away: Teams.StJohnston,
    awayCorners: 3
  },
  {
    home : Teams.Hibs,
    homeCorners: 8,
    away: Teams.StMirren,
    awayCorners: 6
  },
  {
    home : Teams.RossCounty,
    homeCorners: 3,
    away: Teams.Hearts,
    awayCorners: 9
  },
  //19/09/2022
  {
    home : Teams.DundeeUtd,
    homeCorners: 4,
    away: Teams.Dundee,
    awayCorners: 3
  },
  {
    home : Teams.Livingston,
    homeCorners: 3,
    away: Teams.Celtic,
    awayCorners: 10
  },
  {
    home : Teams.Rangers,
    homeCorners: 13,
    away: Teams.Motherwell,
    awayCorners: 3
  },
  //25/09/2022
  {
    home : Teams.Dundee,
    homeCorners: 5,
    away: Teams.Rangers,
    awayCorners: 9
  },
  {
    home : Teams.Hearts,
    homeCorners: 4,
    away: Teams.Livingston,
    awayCorners: 1
  },
  {
    home : Teams.Motherwell,
    homeCorners: 0,
    away: Teams.RossCounty,
    awayCorners: 3
  },
  //26/09/2022
  {
    home : Teams.StMirren,
    homeCorners: 8,
    away: Teams.Aberdeen,
    awayCorners: 3
  },
  {
    home : Teams.Celtic,
    homeCorners: 9,
    away: Teams.DundeeUtd,
    awayCorners: 2
  },
  {
    home : Teams.Hibs,
    homeCorners: 9,
    away: Teams.StJohnston,
    awayCorners: 5
  },
   //02/10/2022
  {
    home : Teams.DundeeUtd,
    homeCorners: 8,
    away: Teams.RossCounty,
    awayCorners: 4
  },
  {
    home : Teams.Hearts,
    homeCorners: 7,
    away: Teams.Motherwell,
    awayCorners: 8
  },
  {
    home : Teams.Livingston,
    homeCorners: 8,
    away: Teams.StMirren,
    awayCorners: 1
  },
  {
    home : Teams.StJohnston,
    homeCorners: 3,
    away: Teams.Dundee,
    awayCorners: 4
  },
  //03/10/2022
  {
    home : Teams.Aberdeen,
    homeCorners: 6,
    away: Teams.Celtic,
    awayCorners: 8
  },
  {
    home : Teams.Rangers,
    homeCorners: 12,
    away: Teams.Hibs,
    awayCorners: 1
  },
  //16/10/2022
  {
    home : Teams.Hibs,
    homeCorners: 6,
    away: Teams.DundeeUtd,
    awayCorners: 8
  },
  {
    home : Teams.Motherwell,
    homeCorners: 4,
    away: Teams.Celtic,
    awayCorners: 8
  },
  {
    home : Teams.Rangers,
    homeCorners: 6,
    away: Teams.Hearts,
    awayCorners: 4
  },
  {
    home : Teams.RossCounty,
    homeCorners: 5,
    away: Teams.StMirren,
    awayCorners: 3
  },
  {
    home : Teams.StJohnston,
    homeCorners: 12,
    away: Teams.Livingston,
    awayCorners: 2
  },
  {
    home : Teams.Dundee,
    homeCorners: 3,
    away: Teams.Aberdeen,
    awayCorners: 8
  },
  //23/10/2021
  {
    home : Teams.Aberdeen,
    homeCorners: 0,
    away: Teams.Hibs,
    awayCorners: 4
  },
  {
    home : Teams.Celtic,
    homeCorners: 7,
    away: Teams.StJohnston,
    awayCorners: 3
  },
  {
    home : Teams.DundeeUtd,
    homeCorners: 4,
    away: Teams.Motherwell,
    awayCorners: 11
  },
  {
    home : Teams.Hearts,
    homeCorners: 5,
    away: Teams.Dundee,
    awayCorners: 3
  },
  {
    home : Teams.RossCounty,
    homeCorners: 7,
    away: Teams.Livingston,
    awayCorners: 0
  },
  //24/10/2021
  {
    home : Teams.StMirren,
    homeCorners: 4,
    away: Teams.Rangers,
    awayCorners: 7
  },
  //27/10/2021
  {
    home : Teams.Dundee,
    homeCorners: 6,
    away: Teams.RossCounty,
    awayCorners: 6
  },
  {
    home : Teams.Hibs,
    homeCorners: 4,
    away: Teams.Celtic,
    awayCorners: 8
  },
  {
    home : Teams.Livingston,
    homeCorners: 4,
    away: Teams.DundeeUtd,
    awayCorners: 4
  },
  {
    home : Teams.Motherwell,
    homeCorners: 4,
    away: Teams.StMirren,
    awayCorners: 10
  },
  {
    home : Teams.Rangers,
    homeCorners: 14,
    away: Teams.Aberdeen,
    awayCorners: 2
  },
  {
    home : Teams.StJohnston,
    homeCorners: 6,
    away: Teams.Hearts,
    awayCorners: 6
  },
  //30/10/2021
  {
    home : Teams.Aberdeen,
    homeCorners: 5,
    away: Teams.Hearts,
    awayCorners: 5
  },
  {
    home : Teams.Celtic,
    homeCorners: 6,
    away: Teams.Livingston,
    awayCorners: 3
  },
  {
    home : Teams.DundeeUtd,
    homeCorners: 8,
    away: Teams.StJohnston,
    awayCorners: 3
  },
  {
    home : Teams.StMirren,
    homeCorners: 8,
    away: Teams.Dundee,
    awayCorners: 4
  },
  //31/10/2021
  {
    home : Teams.Motherwell,
    homeCorners: 2,
    away: Teams.Rangers,
    awayCorners: 12
  },


]