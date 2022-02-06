import { Injectable } from '@angular/core';
import * as CornerTypes from '../cornersScotPrem/cornersTypes';
import * as tf from '@tensorflow/tfjs';
import * as CornerData from './cornerDataScot';

@Injectable({
  providedIn: 'root'
})
export class CornersScotPremService {

  private model: any;
  trainLabelMax: tf.Tensor;
  trainLabelMin: tf.Tensor;

  constructor() { 
  }

  getHistory(): CornerTypes.Match[] {
    return CornerData.cornerData;
  }

  getMatchesToForecast(): CornerTypes.Match[]{
    return CornerData.matchesToForecast
  }

  convertTeamNameTo20DArray(team: CornerTypes.Teams): Array<number>{
      return CornerData.convertTeamNameTo20DArray(team);
  }

  getModel(): any {
    return this.model;
  }

  setModel(model: any) {
    this.model = model;
  }

  predict(home: CornerTypes.Teams, away: CornerTypes.Teams): number[]{
    console.log('predict()');
    const inputNumeric = this.convertTeamNameTo20DArray(home)
      .concat(this.convertTeamNameTo20DArray(away));
    console.log(inputNumeric);
    const inputTensor = tf.tensor([inputNumeric], [1,24]);
    console.log('result =>');
    console.log(inputTensor);
    console.log('this.getModel()');
    console.log(this.getModel());
    const result: any = this.getModel().predict(inputTensor)
      .mul(this.trainLabelMax.sub(this.trainLabelMin))
      .add(this.trainLabelMin).arraySync(); 
    console.log('result =>');
    console.log(result);
    return [result[0][0], result[0][1]];
  }

}
