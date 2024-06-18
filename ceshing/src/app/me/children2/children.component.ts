import { AfterViewInit, Component } from '@angular/core';
import { WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';

@Component({
  selector: 'app-children2',
  templateUrl: './children.component.html',
  styleUrl: './children.component.less',
})
export class Children2Component implements AfterViewInit {
  el = ['angular1-element', 'angular2-element'];

  item: WebComponentWrapperOptions = {
    remoteEntry: 'http://localhost:4201/remoteEntry.js',
    remoteName: 'ceshing12',
    exposedModule: './web-components',
    elementName: this.el[1],
  };

  constructor() {}

  ngAfterViewInit() {
    setTimeout(() => {
      const svgElement = document.getElementsByTagName('svg');
      const el = document.getElementsByTagName(this.el[1]);
      console.log('el', el[1]);
      const shadowRoot = el[1]?.shadowRoot;
      console.log('shadowRoot', shadowRoot);
      shadowRoot?.appendChild(svgElement[1])
    }, 1000);
  }
}
