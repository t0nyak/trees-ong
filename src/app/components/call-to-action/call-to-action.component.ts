import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  AfterViewInit,
  HostBinding
} from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition,
  AnimationBuilder
} from "@angular/animations";

@Component({
  selector: "app-call-to-action",
  templateUrl: "./call-to-action.component.html",
  styleUrls: ["./call-to-action.component.scss"]
})
export class CallToActionComponent implements OnInit {
  @Input() type: string;

  CTATitle: string;
  CTAButton: string;
  isFilled: boolean;
  progressBarPerc: number;

  @ViewChild("progressBar", { static: true }) progressBar: ElementRef;

  constructor() {}

  ngOnInit() {
    this.progressBarPerc = 0;
    this.CTATitle =
      this.type === "socios"
        ? "call-to-action.partners.title"
        : "call-to-action.funds.title";
    this.CTAButton =
      this.type === "socios"
        ? "call-to-action.partners.button"
        : "call-to-action.funds.button";
    this.progressBarPerc = 0;

    setTimeout(
      () =>
        (this.progressBarPerc =
          this.type === "socios" ? Math.random() * 100 : Math.random() * 100),
      500
    );
  }
}
