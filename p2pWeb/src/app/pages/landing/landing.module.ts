import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LandingRoutingModule } from './landing.routing';
import { LandingComponent } from './landing.component';
import { NavBarModule } from 'src/app/components/navBar/navBar.module';

@NgModule({
  imports: [
    BrowserModule,
    LandingRoutingModule,
    NavBarModule
  ],
  declarations: [LandingComponent]
})
export class LandingModule { }
