import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'twoD', loadChildren: () => import('./twoD/twoD.module').then( m => m.TwoDPageModule) },
  { path: 'classification', loadChildren: () => import('./classification/classification.module').then( m => m.ClassificationPageModule) },
  { path: 'football', loadChildren: () => import('./football/football.module').then(m => m.FootballPageModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
