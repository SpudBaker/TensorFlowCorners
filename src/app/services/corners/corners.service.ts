import { Injectable } from '@angular/core';
import * as CornerTypes from './cornersTypes';
import * as CornerData from './cornerData';
import * as tf from '@tensorflow/tfjs';

@Injectable({
  providedIn: 'root'
})
export class CornersService {

  private model: any;
  trainLabelMax: tf.Tensor;
  trainLabelMin: tf.Tensor;

  constructor() { }

  convertTeamNameTo20DArray(team: CornerTypes.Teams): Array<number> {
    switch (team) {
      case CornerTypes.Teams.Arsenal:
        return [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]
      case CornerTypes.Teams.AstonVilla:
        return [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      case CornerTypes.Teams.Brentford:
        return [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      case CornerTypes.Teams.Brighton:
        return [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      case CornerTypes.Teams.Burnley:
        return [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      case CornerTypes.Teams.Chelsea:
        return [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      case CornerTypes.Teams.CrystalPalace:
        return [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      case CornerTypes.Teams.Everton:
        return [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      case CornerTypes.Teams.Leicester:
        return [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      case CornerTypes.Teams.Liverpool:
        return [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      case CornerTypes.Teams.ManCity:
        return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      case CornerTypes.Teams.ManUtd:
        return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]
      case CornerTypes.Teams.Newcastle:
        return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0]
      case CornerTypes.Teams.Norwich:
        return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0]
      case CornerTypes.Teams.Leeds:
        return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0]
      case CornerTypes.Teams.Southampton:
        return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0]
      case CornerTypes.Teams.Spurs:
        return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0]
      case CornerTypes.Teams.Watford:
        return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0]
      case CornerTypes.Teams.WestHam:
        return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0]
      case CornerTypes.Teams.Wolves:
        return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
      default:
        console.log('not a recognised team');
    }
  }

  getHistory(): CornerTypes.Match[] {
    return CornerData.cornerData;
  }

  getMatchesToForecast(): CornerTypes.Match[]{
    return CornerData.matchesToForecast
  }

  getModel(): any {
    return this.model;
  }

  predict(home: CornerTypes.Teams, away: CornerTypes.Teams): number[]{
    const inputNumeric = this.convertTeamNameTo20DArray(home)
      .concat(this.convertTeamNameTo20DArray(away));
    const inputTensor = tf.tensor([inputNumeric], [1,40]);
    const result: any = this.getModel().predict(inputTensor)
      .mul(this.trainLabelMax.sub(this.trainLabelMin))
      .add(this.trainLabelMin).arraySync(); 
    return [result[0][0], result[0][1]];
  }

  setModel(model: any) {
    this.model = model;
  }

}
