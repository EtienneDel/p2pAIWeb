import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { LandingRoutingModule } from "@p2p/pages/landing/landing.routing";
import { LandingComponent } from "@p2p/pages/landing/landing.component";
import { NavBarModule } from "@p2p/components/navBar/navBar.module";
import { LandModule } from "@p2p/components/land/land.module";

@NgModule({
  imports: [BrowserModule, LandingRoutingModule, NavBarModule, LandModule],
  declarations: [LandingComponent]
})
export class LandingModule {}
