import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Guard } from "@p2p/helpers/guard.helper";

import { AppRoutingModule } from "@p2p/app.routing";
import { AppComponent } from "@p2p/app.component";
import { LandingModule } from "@p2p/pages/landing/landing.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, LandingModule],
  providers: [Guard],
  bootstrap: [AppComponent]
})
export class AppModule {}
