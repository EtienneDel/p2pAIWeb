import { Component, OnInit } from "@angular/core";
import {
  animate,
  state,
  style,
  transition,
  trigger
} from "@angular/animations";

@Component({
  selector: "app-land",
  templateUrl: "./land.component.html",
  styleUrls: ["./land.component.scss"],
  animations: [
    trigger("animStateXLR", [
      state("in", style({ transform: "translateX(0)", opacity: 1 })),
      state("void", style({ transform: "translateX(-20px)", opacity: 0 })),
      transition("void => *", animate(".3s ease-in-out")),
      transition("* => void", animate(".3s ease-in-out"))
    ]),
    trigger("animStateXRL", [
      state("in", style({ transform: "translateX(0)", opacity: 1 })),
      state("void", style({ transform: "translateX(20px)", opacity: 0 })),
      transition("void => *", animate(".3s ease-in-out")),
      transition("* => void", animate(".3s ease-in-out"))
    ])
  ]
})
export class LandComponent {
  displayLeft: boolean = false;
  displayRight: boolean = false;

  constructor() {}
}
