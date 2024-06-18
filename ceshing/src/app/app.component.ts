import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <a routerLink="/me" routerLinkActive="active" >去Me页面</a>/
    <a routerLink="/test" routerLinkActive="active" >去Test页面</a>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
}
