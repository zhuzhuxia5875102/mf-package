import { Injector, NgModule, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeComponent } from './me.component';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { shareNgZone } from '@angular-architects/module-federation-tools';;


@NgModule({
  declarations: [MeComponent],
  imports: [
    CommonModule,
    BrowserModule,
  ],
  exports: [MeComponent],
  bootstrap: [],
})
export class MeModule {
  constructor(private injector: Injector, private ngZone: NgZone) {
    shareNgZone(ngZone);
  }

  ngDoBootstrap() {
    const ce = createCustomElement(MeComponent, { injector: this.injector });
    customElements.define('angular1-element', ce);
  }
}
