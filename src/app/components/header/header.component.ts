import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('openCartMenu', [
      state('open', style({ opacity: 1 })),
      transition('void => *', [
        style({opacity: 0}),
        animate(600)
      ]),
      transition('* => void', [
        animate(600, style({opacity: 0}))
      ])
    ])
  ]
})
export class HeaderComponent {
  cartIsOpen: boolean;

  constructor() { 
    this.cartIsOpen = false;
  }

  ngOnInit() {
  }

  toggleCartMenu() {
    this.cartIsOpen = !this.cartIsOpen;
  }
}
