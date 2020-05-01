import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-price-range",
  templateUrl: "./price-range.component.html",
  styleUrls: ["./price-range.component.scss"],
})
export class PriceRangeComponent implements OnInit {
  minValue: number = 100;
  maxValue: number = 400;

  constructor() {}

  ngOnInit() {}
}
