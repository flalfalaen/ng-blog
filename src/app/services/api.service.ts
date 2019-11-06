import { Injectable, Injector } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {delay, distinct, filter, map, finalize} from "rxjs/operators";
import {forkJoin} from "rxjs";
import {LoaderService} from "./loader.service";

@Injectable({
    providedIn: "root",
})

export class ApiService {

    private simpleString: string = '';

    constructor(private httpRequest: HttpClient,
                private injector: Injector) {}

    public loader = this.injector.get(LoaderService);

    getAllPosts() {
        // this.loader.showLoader();
        return this.httpRequest.get('https://jsonplaceholder.typicode.com/posts').pipe(
            delay(1500),
            // finalize(() => this.loader.hideLoader())
        )
    }

    getRelatedPosts(userId) {
        // this.loader.showLoader();
        return this.httpRequest.get('https://jsonplaceholder.typicode.com/posts?userId=' + userId).pipe(
            delay(1500),
            // finalize(() => this.loader.hideLoader())
        )
    }

    getSinglePost(postId) {
        // this.loader.showLoader();
        return forkJoin(
            this.httpRequest.get('https://jsonplaceholder.typicode.com/posts?id=' + postId).pipe(
                delay(2000),
                // finalize(() => this.loader.hideLoader())
            ),
            this.httpRequest.get('https://jsonplaceholder.typicode.com/posts/1/comments?postId=' + postId).pipe(
                delay(1000),
                // finalize(() => this.loader.hideLoader())
            ),
            this.httpRequest.get('https://jsonplaceholder.typicode.com/albums/1/photos?id=' + postId),
        )

    }

    getImagesForSinglePost(postId){

    }
}
