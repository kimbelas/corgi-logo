import { Component, OnDestroy, OnInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  constructor (private clipboardService: ClipboardService) {}
  caString: string = 'COMING SoooOOoon!';

  images = [
    '../assets/eros1.png',
    '../assets/eros2.png',
    '../assets/eros3.png'
  ];
  currentIndex = 0;
  intervalId: any;

  slideshowImages = [
    '../assets/eros1.png',
    '../assets/eros2.png',
    '../assets/eros3.png',
    '../assets/eros4.png',
    '../assets/eros5.png',
    '../assets/eros6.png',
    '../assets/eros7.png',
    '../assets/eros8.png',
    '../assets/eros9.png',
    '../assets/eros10.png',
    '../assets/eros11.png',
    '../assets/eros12.png',
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

  textContent: string = 'EROS FEELING SEXYYYY';
  private hoverInterval: any;
  private baseText: string = 'EROS FEELING SEXYYYY';
  private hoverText: string = this.baseText;

  onMouseOver(): void {
    this.hoverInterval = setInterval(() => {
      this.hoverText += 'Y';
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
