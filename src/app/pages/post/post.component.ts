import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  OnInit,
  TemplateRef,
  ViewChild
} from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../../services/api.service";
import {LoaderService} from "../../services/loader.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, AfterContentInit, AfterViewInit {

  @ViewChild('showCommentsButton', {static: false}) showCommentsButton: TemplateRef<any>;

  public showButton = false;
  public currentPost = '';
  private post;
  private comments;
  private photos;

  public showHide = 'Show';
  public commentsShow = false;

  constructor(public router: Router,
              public apiService: ApiService,
              public loader: LoaderService) { }


  toggleShowHide() {
    this.commentsShow = !this.commentsShow;
    if(this.commentsShow) {
      this.showHide = 'Hide';
    }
    else {
      this.showHide = 'Show';
    }
  }

  ngOnInit() {
    this.loader.showLoader(); // show loader

    this.currentPost = this.router.url.replace('/post/','');
    this.apiService.getSinglePost(this.currentPost).subscribe(
        responcePost => {
          this.post = responcePost[0];
          this.comments = responcePost[1];
          this.photos = responcePost[2][0].url;
          this.loader.hideLoader(); // hide loader
          this.showButton = true;
        }
    )
  }

  ngAfterContentInit() {
  }

  ngAfterViewInit() {
    console.log(this.showCommentsButton)
  }

}
