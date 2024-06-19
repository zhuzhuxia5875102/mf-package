import { Component } from '@angular/core';
import { WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';

@Component({
  selector: 'app-children2',
  template: `
    <app-wc-wrapper [options]="item"></app-wc-wrapper>
  `,
})
export class Children2Component   {
  el = ['angular1-element', 'angular2-element'];

  item: WebComponentWrapperOptions = {
    remoteEntry: 'http://localhost:4201/remoteEntry.js',
    remoteName: 'ceshing12',
    exposedModule: './web-components',
    elementName: this.el[1],
  };

  constructor() {}
}
