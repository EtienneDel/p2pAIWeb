import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavBarComponent } from "@p2p/components/navBar/navBar.component";

@NgModule({
  imports: [CommonModule],
  declarations: [NavBarComponent],
  exports: [NavBarComponent],
  entryComponents: [NavBarComponent]
})
export class NavBarModule {}
