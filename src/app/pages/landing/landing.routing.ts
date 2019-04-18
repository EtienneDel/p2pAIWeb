import { NgModule } from '@angular/core';
import { LandingComponent } from './landing.component';
import { RouterModule, Routes } from '@angular/router';
import { Guard } from '../../helpers/guard.helper';

const routes: Routes = [
    { path: '',  component: LandingComponent, canActivate : [Guard] }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class LandingRoutingModule { }
