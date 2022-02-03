import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomePage } from './home/home.page';
import { ForecastPage } from './forecast/forecast.page';

const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'forecast', component: ForecastPage },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomePage, ForecastPage]
})
export class ScotPremModule {}
