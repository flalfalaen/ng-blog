import { Component } from '@angular/core';
import { OneService } from "./services/providers-exp/one.service";

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

    constructor(private readonly one: OneService) {
        this.one.msgToConsole();
    }

}
