import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavBarComponent } from "@p2p/components/navBar/navBar.component";
import { MatButtonModule, MatDialogModule } from "@angular/material";
import { SignDialogComponent } from "../signDialog/signDialog.component";

@NgModule({
  imports: [CommonModule, MatDialogModule],
  declarations: [NavBarComponent],
  exports: [NavBarComponent],
  entryComponents: [NavBarComponent, SignDialogComponent]
})
export class NavBarModule {}
