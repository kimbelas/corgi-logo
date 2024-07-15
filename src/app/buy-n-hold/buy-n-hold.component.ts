import { Component } from '@angular/core';

@Component({
  selector: 'app-buy-n-hold',
  templateUrl: './buy-n-hold.component.html',
  styleUrls: ['./buy-n-hold.component.css']
})
export class BuyNHoldComponent {
  onBuy(): void {
    window.open('https://pump.fun');
  }
}
