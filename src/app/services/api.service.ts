import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {delay, distinct, filter, map} from "rxjs/operators";
import {forkJoin} from "rxjs";


@Injectable({
    providedIn: "root",
})

export class ApiService {

    private simpleString: string = '';

    constructor(private httpRequest: HttpClient) {}

    getAllPosts() {
        return this.httpRequest.get('https://jsonplaceholder.typicode.com/posts').pipe(
            delay(1500)
        )
    }

    getRelatedPosts(userId) {
        return this.httpRequest.get('https://jsonplaceholder.typicode.com/posts?userId=' + userId).pipe(
            delay(1500)
        )
    }

    getSinglePost(postId) {
        return forkJoin(
            this.httpRequest.get('https://jsonplaceholder.typicode.com/posts?id=' + postId),
            this.httpRequest.get('https://jsonplaceholder.typicode.com/posts/1/comments?postId=' + postId)
        ).pipe(
            delay(1500)
        )

    }
}
