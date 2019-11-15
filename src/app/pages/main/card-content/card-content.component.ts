import {Component, Host, OnInit, Optional, Self, SkipSelf} from '@angular/core';
import {OneService} from "../../../services/providers-exp/one.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-card-content',
  templateUrl: './card-content.component.html',
  styleUrls: ['./card-content.component.scss'],
  // providers: [OneService],
})
export class CardContentComponent implements OnInit {

  constructor(/*@Self() @Optional @SkipSelf() @Host() @Optional() */public one: OneService,
              private readonly route: ActivatedRoute,) {
    console.log(" --------------------- ");
    console.log("CardContentComponent says ");
    console.log(this.one.oneVariable);
    this.one.msg();
    console.log(" --------------------- ");

  }

  ngOnInit() {

  }

}
