import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { TwoDPage } from './twoD.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: TwoDPage
      }
    ])
  ],
  declarations: [TwoDPage]
})
export class TwoDPageModule {}
