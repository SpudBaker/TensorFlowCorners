import { Component } from '@angular/core';
import { NavController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  constructor(private navCtrl: NavController) { }

  navTwoD() {
    this.navCtrl.navigateRoot('twoD');
  }

  navClassification() {
    this.navCtrl.navigateRoot('classification');
  }

  navFootball() {
    this.navCtrl.navigateRoot('football');
  }

}
