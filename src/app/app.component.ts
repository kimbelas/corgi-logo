import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  onClick(value: string): void {
    if (value === 'x') {
      // window.open('https://x.com/GBILLY_SOL');
    } else if ( value === 'tg') {
      // window.open('https://t.me/BillygangUp');
    }
  }

  onBuy(): void {
    // window.open('https://pump.fun/BFM9ZghaAWZ4bsQyhCECuSKtNLe7iyjLGTm8SK3upump');
  }

  textContent: string = 'BELLI TALKSSSS';
  private hoverInterval: any;
  private baseText: string = 'BELLI TALKSSS';
  private hoverText: string = this.baseText;

  onMouseOver(): void {
    this.hoverInterval = setInterval(() => {
      this.hoverText += 'S';
      this.textContent = this.hoverText;
    }, 500);
  }

  onMouseOut(): void {
    clearInterval(this.hoverInterval);
    this.hoverText = this.baseText;
    this.textContent = this.hoverText;
  }

  ngOnDestroy(): void {
    clearInterval(this.hoverInterval);
  }
}
