import {Injector, NgModule, NgZone} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Me2Component } from './me2/me2.component';
import {shareNgZone} from "@angular-architects/module-federation-tools";
import {createCustomElement} from "@angular/elements";
import {BrowserModule} from "@angular/platform-browser";



@NgModule({
  declarations: [
    Me2Component
  ],
  imports: [
    BrowserModule,
    CommonModule,
  ],
  exports:[Me2Component],
  bootstrap: []
})
export class Me2Module {


  constructor(private injector: Injector,private ngZone: NgZone) {
    shareNgZone(ngZone);
  }

  ngDoBootstrap() {
    const ce = createCustomElement(Me2Component, {injector: this.injector});
    customElements.define('angular2-element', ce);
  }
}
