import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";
import {distinct, distinctUntilChanged, map} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  public post;
  public posts;
  public pages;
  public pageNumber;

  constructor(public apiService: ApiService,
              public router: Router) { }

  //bicycle distinct - coz pipe.disctinct doesnt work
  distinctCustom(value, index, self) {
    return self.indexOf(value) === index;
  }

  // here we are navigating to the post pages
  navigate(page) {
    this.apiService.getRelatedPosts(page).subscribe(
        data => {
          this.posts = data;
    });
    this.router.navigate(['news', page])
  }

  navigateToPost(currentPostId){
    this.router.navigate(['post', currentPostId])
  }


  ngOnInit() {

    //here we are calling all posts and getting only userId for understand how many pages need to setup
    this.apiService.getAllPosts().pipe(
        map( res => Object.values(res).map( e => e.userId ))
        ).subscribe(
        data => {
          this.pages = data.filter(this.distinctCustom);
        }
    );

    //here the first call on initialization
    this.apiService.getRelatedPosts(1).subscribe(data => {
      this.posts = data;
    });

    this.apiService.getSinglePost(1).subscribe(
        responce => console.log(responce)
    )

  }

}
