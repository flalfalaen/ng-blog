import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../../services/api.service";
import {LoaderService} from "../../services/loader.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  public currentPost = '';
  private post;
  private comments;

  public showHide = 'Show';
  public commentsShow = false;

  constructor(public router: Router,
              public apiService: ApiService, public loader: LoaderService) { }


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
    this.loader.showLoader();

    this.currentPost = this.router.url.replace('/post/','');

    this.apiService.getSinglePost(this.currentPost).subscribe(
        responcePost => {
          console.log(responcePost);
          this.post = responcePost[0];
          this.comments = responcePost[1];
          // this.loader.hideLoader();
        }
    )

    // this.apiService.getSinglePost()
  }

}
