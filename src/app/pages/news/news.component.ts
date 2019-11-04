import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  public posts;
  public pages;
  public dump;

  constructor(public apiService: ApiService) { }

  ngOnInit() {

    this.apiService.getAllPosts().subscribe(
        data => {
          // console.log(data);
          // this.dump = data;
          // this.pages = this.dump.filter( (item) => {
          //     return item.userId;
          // });
          this.pages = data;
          console.log(this.pages);
        }
    );

    this.apiService.getRelatedPosts(2).subscribe(data => {
      console.log(data);
      this.posts = data;
      // this.pages = data.filter()
    });

    console.log('test' + this.posts);

  }

}
