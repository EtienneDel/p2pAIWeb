import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-land",
  templateUrl: "./land.component.html",
  styleUrls: ["./land.component.scss"]
})
export class LandComponent {
  displayLeft: boolean = false;
  displayRight: boolean = false;

  constructor() {}
}
