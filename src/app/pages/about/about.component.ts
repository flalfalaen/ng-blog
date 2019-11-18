import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnChanges, DoCheck {

  private test: string;

  constructor() { }

  readInput(event) {
    console.log(event.target.value);
  }

  ngOnInit() {

  }

  ngOnChanges() {

  }

  ngDoCheck() {
    console.log(this.test);

  }

}
