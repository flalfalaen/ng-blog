import { Component, OnInit } from '@angular/core';
import {LoaderService} from "../../services/loader.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public link: string = '';

  constructor(public form: LoaderService) { }

  ngOnInit() {
  }

}
