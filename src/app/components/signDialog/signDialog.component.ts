import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { AuthService } from "@p2p/services/auth.service";

@Component({
  selector: "app-sign-dialog",
  templateUrl: "./signDialog.component.html",
  styleUrls: ["./signDialog.component.scss"]
})
export class SignDialogComponent {
  constructor(
    private router: Router,
    public dialogRef: MatDialogRef<SignDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public auth: AuthService
  ) {}
}
