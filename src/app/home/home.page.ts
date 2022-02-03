import { Component } from '@angular/core';
import { NavController} from '@ionic/angular';
import { CornersPremService } from '../football/services/cornersPrem/corners.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  constructor(private navCtrl: NavController, private cornerService: CornersPremService) { 
  }

  navTwoD() {
    this.navCtrl.navigateRoot('twoD');
  }

  navClassification() {
    this.navCtrl.navigateRoot('classification');
  }

  async navFootballPrem() {
    this.navCtrl.navigateRoot('premFootball');
  }

  async navFootballScotPrem() {
    this.navCtrl.navigateRoot('scotPremFootball');
  }

}
