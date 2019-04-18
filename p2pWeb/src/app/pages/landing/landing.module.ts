import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LandingRoutingModule } from './landing.routing';
import { LandingComponent } from './landing.component';
import { NavBarModule } from 'src/app/components/navBar/navBar.module';
import { LandModule } from 'src/app/components/land/land.module';

@NgModule({
  imports: [
    BrowserModule,
    LandingRoutingModule,
    NavBarModule,
    LandModule
  ],
  declarations: [LandingComponent]
})
export class LandingModule { }
