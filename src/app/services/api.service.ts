import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {delay, distinct, filter, map} from "rxjs/operators";


@Injectable({
    providedIn: "root",
})

export class ApiService {

    private simpleString: string = '';

    constructor(private httpRequest: HttpClient) {}

    getAllPosts() {
        return this.httpRequest.get('https://jsonplaceholder.typicode.com/posts')
    }

    getRelatedPosts(userId) {
        return this.httpRequest.get('https://jsonplaceholder.typicode.com/posts?userId=' + userId).pipe(
            // delay(1500)
        )
    }
}
