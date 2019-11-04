import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <div class="wrapper">
    <app-header></app-header>  
    <router-outlet></router-outlet>
          <div class="push"></div>
      </div>
    <app-footer></app-footer>  
  `,
  styles: []
})
export class AppComponent {
    constructor() {

    }
}
