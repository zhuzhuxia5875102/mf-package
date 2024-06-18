import { AfterViewInit, Component } from '@angular/core';
import { WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrl: './children.component.less',
})
export class ChildrenComponent implements AfterViewInit {
  el = ['angular1-element', 'angular2-element'];

  item: WebComponentWrapperOptions = {
    remoteEntry: 'http://localhost:4201/remoteEntry.js',
    remoteName: 'ceshing12',
    exposedModule: './web-components',
    elementName: this.el[0],
  };

  constructor() {}

  ngAfterViewInit() {
    setTimeout(() => {
      const svgElement = document.getElementsByTagName('svg');
      const el = document.getElementsByTagName(this.el[0]);
      console.log('el', el[0]);
      const shadowRoot = el[0]?.shadowRoot;
      console.log('shadowRoot', shadowRoot);
      shadowRoot?.appendChild(svgElement[0])
    }, 1000);
  }
}
