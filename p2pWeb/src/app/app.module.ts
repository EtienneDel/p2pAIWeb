import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Guard } from './helpers/guard.helper';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingModule } from './pages/landing/landing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingModule
  ],
  providers: [
    Guard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
