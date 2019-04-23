import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { SignDialogComponent } from "./signDialog.component";

@NgModule({
  declarations: [SignDialogComponent],
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  providers: [],
  exports: [SignDialogComponent]
})
export class SignDialogModule {}
