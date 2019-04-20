import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LandComponent } from "@p2p/components/land/land.component";

@NgModule({
  imports: [CommonModule],
  declarations: [LandComponent],
  exports: [LandComponent],
  entryComponents: [LandComponent]
})
export class LandModule {}
