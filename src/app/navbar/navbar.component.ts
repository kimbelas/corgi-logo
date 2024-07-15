import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  onClick(value: string): void {
    if (value === 'x') {
      window.open('https://x.com/Eroscatsol');
    } else if (value === 'tg') {
      window.open('https://t.me/erosthecat');
    } else if (value === 'pump') {
      window.open('https://pump.fun/');
    }
  }
}
