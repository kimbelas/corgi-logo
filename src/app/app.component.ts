import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onClick(value: string): void {
    if (value === 'x') {
      window.open('https://x.com/GBILLY_SOL');
    } else if ( value === 'tg') {
      window.open('https://t.me/BillygangUp');
    }
  }

  onBuy(): void {
    window.open('https://pump.fun/BFM9ZghaAWZ4bsQyhCECuSKtNLe7iyjLGTm8SK3upump');
  }
}
