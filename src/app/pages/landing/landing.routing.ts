import { NgModule } from "@angular/core";
import { LandingComponent } from "@p2p/pages/landing/landing.component";
import { RouterModule, Routes } from "@angular/router";
import { Guard } from "@p2p/helpers/guard.helper";

const routes: Routes = [
  { path: "", component: LandingComponent, canActivate: [Guard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule {}
