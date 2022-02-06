import { Component } from '@angular/core';
import { NavController} from '@ionic/angular';
import * as tf from '@tensorflow/tfjs';
import * as tfvis from '@tensorflow/tfjs-vis';
import { CornersPremService } from '../../services/cornersPrem/corners.service';
import * as CornerTypes from '../../services/cornersPrem/cornersPremTypes';

@Component({
  selector: 'app-football-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  modelTrained = false;
  teams: CornerTypes.Teams[];
  testLoss: number;
  trainInputTensor: tf.Tensor;
  trainLabelTensor: tf.Tensor;
  trainInputMax: tf.Tensor;
  trainInputMin: tf.Tensor;
  trainNormalizedLabels: tf.Tensor;

  constructor(private cornerService: CornersPremService, private navCtrl: NavController) {
   }

  ionViewDidEnter() {
    this.teams = Object.values(CornerTypes.Teams);
    tfvis.visor().open();
    this.run();
  }

  convertToTensor(data) {
    return tf.tidy(() => {
      // Step 1. Shuffle the data    
      tf.util.shuffle(data);
      // Step 2. Convert data to Tensor
      const inputs = data.map(match =>
        match.home.concat(match.away)
      );
      const labels = data.map(match => 
        [match.homeCorners, match.awayCorners]
      );
      const inputTensor = tf.tensor(inputs, [inputs.length, 40]);
      const labelTensor = tf.tensor(labels, [labels.length, 2]);
      //Step 3. Normalize the data to the range 0 - 1 using min-max scaling
      const inputMax = inputTensor.max();
      const inputMin = inputTensor.min();  
      const labelMax = labelTensor.max();
      const labelMin = labelTensor.min();
      const normalizedInputs = inputTensor.sub(inputMin).div(inputMax.sub(inputMin));
      const normalizedLabels = labelTensor.sub(labelMin).div(labelMax.sub(labelMin));
      return {
        inputs: normalizedInputs,
        labels: normalizedLabels,
        // Return the min/max bounds so we can use them later.
        inputMax,
        inputMin,
        labelMax,
        labelMin,
      }
    });  
  }

  async createModel() {
    const model = tf.sequential();
    model.add(tf.layers.dense({inputShape: [40], units: 40, useBias: true}));
    model.add(tf.layers.dense({units: 40, activation: 'sigmoid'}));
    model.add(tf.layers.dense({units: 40, activation: 'sigmoid'}));
    model.add(tf.layers.dense({units: 2, useBias: true}));
    this.cornerService.setModel(model);
  }

  async getData(): Promise<Array<CornerTypes.MatchNumeric>> {
    const data = this.cornerService.getHistory();
    const result = new Array<CornerTypes.MatchNumeric>();
    data.forEach((d: CornerTypes.Match) => {
      const homeTeam: Array<number> = this.cornerService.convertTeamNameTo20DArray(d.home);
      const awayTeam: Array<number> = this.cornerService.convertTeamNameTo20DArray(d.away);
      result.push(new CornerTypes.MatchNumeric(homeTeam, d.homeCorners, awayTeam, d.awayCorners));
    });
    return result;
  }

  nav(data: string) {
    this.navCtrl.navigateRoot(data);
  }

  async run() {
    if (this.cornerService.getModel() && this.cornerService.getModel().layers.size > 1) {this.cornerService.getModel().dispose()};
    const data = await this.getData();
    await this.createModel();
    // Convert the data to a form we can use for training.
    const tensorData = this.convertToTensor(data);
    this.trainInputTensor = tensorData.inputs;
    this.trainLabelTensor = tensorData.labels;
    this.trainInputMax = tensorData.inputMax;
    this.trainInputMin = tensorData.inputMin;
    this.cornerService.trainLabelMax = tensorData.labelMax;
    this.cornerService.trainLabelMin = tensorData.labelMin;
    await this.trainModel();
    await this.testModel();
  }

  async trainModel() { 
    this.cornerService.getModel().compile({
      optimizer: tf.train.adam(),
      loss: tf.losses.meanSquaredError,
      metrics: ['mse'],
    });
    const batchSize = 25;
    const epochs = 60;
    await this.cornerService.getModel().fit(this.trainInputTensor, this.trainLabelTensor, {
      batchSize,
      epochs,
      shuffle: true,
      callbacks: tfvis.show.fitCallbacks(
        { name: 'Training Performance' },
        ['mse'], 
        { height: 200, callbacks: ['onEpochEnd'] }
      )
    });
    tfvis.visor().close();
    this.modelTrained = true;
  }

  async testModel() {
    const result = await this.cornerService.getModel().evaluate(this.trainInputTensor, this.trainLabelTensor);
    this.testLoss = result[0].arraySync();
  }

}
