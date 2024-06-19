import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MeModule } from './me/me.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
