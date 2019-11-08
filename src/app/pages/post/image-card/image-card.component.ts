import { Component, OnInit, Input } from '@angular/core';
import { HoverDirective } from "../../../directives/hover.directive";

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss']
})
export class ImageCardComponent implements OnInit {

  @Input() imageSrc: string;

  constructor() { }

  ngOnInit() {
  }

}
