import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CornersScotPremService } from '../../services/cornersScotPrem/corners.service';
import * as CornerTypes from '../../services/cornersScotPrem/cornersTypes';

@Component({
  selector: 'app-football-forecast',
  templateUrl: './forecast.page.html',
  styleUrls: ['./forecast.page.scss'],
})
export class ForecastPage {

  formData: FormGroup;
  predictionHomeCorners: number;
  predictionAwayCorners: number;
  teams: CornerTypes.Teams[];

  constructor(private formBuilder: FormBuilder, private cornerService: CornersScotPremService) {
    this.formData = this.formBuilder.group({
      homeTeam: '',
      awayTeam: ''
    });
   }

  ionViewDidEnter() {
    this.teams = Object.values(CornerTypes.Teams);
  }

  predict() { 
    if (this.formData.controls['homeTeam'].value && this.formData.controls['awayTeam'].value) {
      const res: number[] = this.cornerService.predict(this.formData.controls['homeTeam'].value, this.formData.controls['awayTeam'].value);
      this.predictionHomeCorners = res[0];
      this.predictionAwayCorners = res[1];
    }
  }

}
