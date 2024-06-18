import { AfterViewInit, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-me></app-me>

  `,
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {

  }
}
