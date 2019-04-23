import { Component } from "@angular/core";
import { AuthService } from "./services/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "p2pWeb";

  constructor(public auth: AuthService) {
    console.log(auth.isAuthenticated());
  }
}
