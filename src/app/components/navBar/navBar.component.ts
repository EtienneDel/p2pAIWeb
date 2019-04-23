import { Component, OnInit } from "@angular/core";
import { SignDialogComponent } from "../signDialog/signDialog.component";
import { MatDialog } from "@angular/material";

@Component({
  selector: "app-navbar",
  templateUrl: "./navBar.component.html",
  styleUrls: ["./navBar.component.scss"]
})
export class NavBarComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(SignDialogComponent, {
      width: "675px",
      data: {},
      autoFocus: false
    });
  }
}
