// glitter.directive.ts
import { Directive, HostListener, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appGlitter]'
})
export class GlitterDirective implements OnInit {
  private starPool: HTMLElement[] = [];
  private starIndex = 0;
  private starCount = 50; // Limit the number of stars

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    for (let i = 0; i < this.starCount; i++) {
      const star = this.renderer.createElement('div');
      this.renderer.addClass(star, 'star');
      this.renderer.setStyle(star, 'position', 'absolute');
      this.renderer.setStyle(star, 'pointer-events', 'none');
      this.renderer.setStyle(star, 'z-index', '9999');
      this.renderer.setStyle(star, 'width', '5px');
      this.renderer.setStyle(star, 'height', '5px');
      this.renderer.setStyle(star, 'background', 'radial-gradient(circle, #fff, rgba(255, 255, 255, 0))');
      this.renderer.setStyle(star, 'border-radius', '50%');
      this.renderer.setStyle(star, 'animation', 'star 0.5s linear');
      this.renderer.setStyle(star, 'opacity', '0');
      this.renderer.appendChild(document.body, star);
      this.starPool.push(star);
    }
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.moveStar(event.pageX, event.pageY);
  }

  private moveStar(x: number, y: number) {
    const star = this.starPool[this.starIndex];
    this.renderer.setStyle(star, 'top', `${y}px`);
    this.renderer.setStyle(star, 'left', `${x}px`);
    this.renderer.setStyle(star, 'opacity', '1');
    this.starIndex = (this.starIndex + 1) % this.starCount;

    setTimeout(() => {
      this.renderer.setStyle(star, 'opacity', '0');
    }, 500); // Fade out after 0.5 seconds
  }
}
