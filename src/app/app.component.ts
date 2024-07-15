import { Component, OnDestroy, OnInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  constructor (private clipboardService: ClipboardService) {}
  caString: string = '67ykyRLNzoc1ucaLj1sg4iMxrRd1Vib1nPFzuNBrpump';

  onClick(value: string): void {
    if (value === 'x') {
      window.open('https://x.com/puppibelli?s=21&t=FsTntCLN3m1a02hbcp_rVw');
    } else if (value === 'tg') {
      window.open('https://t.me/+MIITV1xMOYhlYzhl');
    } else if (value === 'pump') {
      window.open('https://pump.fun/67ykyRLNzoc1ucaLj1sg4iMxrRd1Vib1nPFzuNBrpump');
    }
  }

  images = [
    '../assets/slide1.png',
    '../assets/slide2.png',
    '../assets/slide3.png'
  ];
  currentIndex = 0;
  intervalId: any;

  slideshowImages = [
    '../assets/belli1.png',
    '../assets/belli2.png',
    '../assets/belli3.png',
    '../assets/belli4.png',
    '../assets/belli5.png',
    '../assets/belli6.png',
    '../assets/belii-bitcoin.png',
    '../assets/belii-g.png',
    '../assets/belli-fairy.png',
    '../assets/belli-glasses.png',
    '../assets/belli-hodl.png',
    '../assets/belli-police.png',
  ];
  currentSlideIndex = 0;
  slideshowIntervalId: any;

  ngOnInit(): void {
    this.startSlideshow();
    this.startSlideshowBelowBuy();
  }

  startSlideshow() {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 1500);
  }

  startSlideshowBelowBuy() {
    this.slideshowIntervalId = setInterval(() => {
      this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slideshowImages.length;
    }, 1500);
  }

  textContent: string = 'BELLI TALKSSS';
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

  copyToClipboard() {
    this.clipboardService.copyFromContent(this.caString);
    alert('Text copied to clipboard');
  }

  ngOnDestroy(): void {
    clearInterval(this.hoverInterval);
    clearInterval(this.slideshowIntervalId);
  }
}
