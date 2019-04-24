import { Component, OnInit } from "@angular/core";
import { AuthService } from "@p2p/services/auth.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navBar.component.html",
  styleUrls: ["./navBar.component.scss"]
})
export class NavBarComponent {
  constructor(public auth: AuthService) {}
}
