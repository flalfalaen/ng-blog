import { Component, OnInit } from '@angular/core';
import {OneService} from "../../services/providers-exp/one.service";
import {CardContentComponent} from "./card-content/card-content.component";
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  // providers: [OneService],
})
export class MainComponent implements OnInit {

  constructor(private readonly route: ActivatedRoute,
              public one: OneService,
              // public readonly auth: AuthService
  ) {
    this.one.oneVariable = 'Main component string'
  }

  ngOnInit() {
    console.log(" --------------------- ");
    console.log(this.route.routeConfig.component.name, " says ");
    console.log(this.one.oneVariable);
    this.one.msg();
    console.log(" --------------------- ");
    // console.log(`user auth is --> ${this.auth.isAuthenticated()}`)
  }

}
