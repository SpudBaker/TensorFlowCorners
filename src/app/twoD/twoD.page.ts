import { Component } from '@angular/core';
import * as tf from '@tensorflow/tfjs';
import * as tfvis from '@tensorflow/tfjs-vis';

@Component({
  selector: 'app-twoD',
  templateUrl: 'twoD.page.html',
  styleUrls: ['twoD.page.scss'],
})

export class TwoDPage {

  model: any;
  userInput: number;
  prediction: number;
  tensorData: any;


  constructor() {}

  ngOnInit() {
    tfvis.visor().open();
    this.run();
  }

  ionViewDidLeave(){
    tfvis.visor().close();
    this.model.dispose();
  }

  async run() {
    // Load and plot the original input data that we are going to train on.
    const data = await this.getData();
  
    // Create the model
    this.model = await this.createModel()

    // Convert the data to a form we can use for training.
    this.tensorData = this.convertToTensor(data);
    const {inputs, labels} = this.tensorData;
    
    // Train the model  
    await this.trainModel(inputs, labels);

    // Make some predictions using the model and compare them to the
    // original data
    this.testModel(data);
  }
  

  /**
   * Get the car data reduced to just the variables we are interested
   * and cleaned of missing data.
   */
  async getData(): Promise<Array<any>> {
    const carsDataReq = await fetch('https://storage.googleapis.com/tfjs-tutorials/carsData.json');  
    const carsData = await carsDataReq.json();  
    const cleaned = carsData.map(car => ({
      mpg: car.Miles_per_Gallon,
      horsepower: car.Horsepower,
    }))
    .filter(car => (car.mpg != null && car.horsepower != null));
    return cleaned;
  }

  async createModel(): Promise<tf.Sequential> {
    this.model = tf.sequential();
    // Add a single hidden layer
    this.model.add(tf.layers.dense({inputShape: [1], units: 1, useBias: true}));
    // additional layer (exercise)
    this.model.add(tf.layers.dense({units: 20, activation: 'sigmoid'}));
    // Add an output layer
    this.model.add(tf.layers.dense({units: 20, activation: 'sigmoid'}));
    // Add an output layer
    this.model.add(tf.layers.dense({units: 20, activation: 'sigmoid'}));
    // Add an output layer
    this.model.add(tf.layers.dense({units: 1, useBias: true}));
    console.log(this.model);
    return this.model;
  }

  convertToTensor(data) {
    return tf.tidy(() => {
      // Step 1. Shuffle the data    
      tf.util.shuffle(data);
      // Step 2. Convert data to Tensor
      const inputs = data.map(d => d.horsepower)
      const labels = data.map(d => d.mpg);
      const inputTensor = tf.tensor2d(inputs, [inputs.length, 1]);
      const labelTensor = tf.tensor2d(labels, [labels.length, 1]);
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

  async trainModel(inputs, labels) {
    // Prepare the model for training.  
    this.model.compile({
      optimizer: tf.train.adam(),
      loss: tf.losses.meanSquaredError,
      metrics: ['mse'],
    });
    
    const batchSize = 32;
    const epochs = 12;
    inputs.print();
    labels.print();
    
    return await this.model.fit(inputs, labels, {
      batchSize,
      epochs,
      shuffle: true,
      callbacks: tfvis.show.fitCallbacks(
        { name: 'Training Performance' },
        ['mse'], 
        { height: 100, callbacks: ['onEpochEnd'] }
      )
    });
  }

  testModel(inputData) {
    const {inputMax, inputMin, labelMin, labelMax} = this.tensorData;  
    // Generate predictions for a uniform range of numbers between 0 and 1;
    // We un-normalize the data by doing the inverse of the min-max scaling 
    // that we did earlier.
    const [xs, preds] = tf.tidy(() => {
      const xs = tf.linspace(0, 1, 100);      
      const preds = this.model.predict(xs.reshape([100, 1]));      
      const unNormXs = xs
        .mul(inputMax.sub(inputMin))
        .add(inputMin);
      const unNormPreds = preds
        .mul(labelMax.sub(labelMin))
        .add(labelMin);
      // Un-normalize the data
      return [unNormXs.dataSync(), unNormPreds.dataSync()];
    });
    const predictedPoints = Array.from(xs).map((val, i) => {
      return {x: val, y: preds[i]}
    });
    const originalPoints = inputData.map(d => ({
      x: d.horsepower, y: d.mpg,
    }));
    tfvis.render.scatterplot(
      {name: 'Model Predictions vs Original Data'}, 
      {values: [originalPoints, predictedPoints], series: ['original', 'predicted']}, 
      {
        xLabel: 'Horsepower',
        yLabel: 'MPG',
        height: 200
      }
    );
  }

  linearPrediction(val: string) {
    const {inputMax, inputMin, labelMin, labelMax} = this.tensorData; 
    this.userInput = +val; 
    const modelInput: number = ((+val - inputMin.arraySync()) / ((inputMax.arraySync() - inputMin.arraySync())));   

    let TwoD = tf.tensor2d([modelInput], [1,1]);

    this.prediction = this.model.predict(TwoD)
      .mul(labelMax.sub(labelMin))
      .add(labelMin).arraySync(); 
  }

}
