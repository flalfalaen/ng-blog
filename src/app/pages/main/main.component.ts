import { Component, OnInit } from '@angular/core';
import {OneService} from "../../services/providers-exp/one.service";
import {CardContentComponent} from "./card-content/card-content.component";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  // providers: [OneService],
})
export class MainComponent implements OnInit {

  constructor(private readonly route: ActivatedRoute,
              public one: OneService) {
    this.one.oneVariable = 'Main component string'
  }

  ngOnInit() {
    console.log(" --------------------- ");
    console.log(this.route.routeConfig.component.name, " says ");
    console.log(this.one.oneVariable);
    this.one.msg();
    console.log(" --------------------- ");
  }

}
