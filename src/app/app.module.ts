import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GlitterDirective } from './glitter.directive';
import { ObjectsComponent } from './objects/objects.component';
import { BuyNHoldComponent } from './buy-n-hold/buy-n-hold.component';
import { ClipboardModule } from 'ngx-clipboard';
import { BlinkingTextComponent } from './blinking-text/blinking-text.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [AppComponent, GlitterDirective, ObjectsComponent, BuyNHoldComponent, BlinkingTextComponent, NavbarComponent],
  imports: [BrowserModule],
  exports: [ObjectsComponent, BuyNHoldComponent, ClipboardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
