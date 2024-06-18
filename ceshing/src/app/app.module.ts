import { NgModule, NgZone } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeComponent } from './me/me.component';
import { ChildrenComponent } from './me/children/children.component';
import {
  ModuleFederationToolsModule,
  shareNgZone,
} from '@angular-architects/module-federation-tools';
import { RouteReuseStrategy } from '@angular/router';
import { AppReuseStrategy } from '../app-route-reuse-strategy';
import { TestComponent } from './test/test.component';
import { Children2Component } from './me/children2/children.component';
import { WebComponentWrapper } from './mf-wrapper.component';

@NgModule({
  declarations: [AppComponent, WebComponentWrapper, MeComponent, TestComponent, ChildrenComponent, Children2Component],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModuleFederationToolsModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: AppReuseStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private ngZone: NgZone) {
    shareNgZone(ngZone);
  }
}
