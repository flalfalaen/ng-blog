import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: "root",
})
export class AppInitService {

    constructor(private httpRequest: HttpClient) {}

    getConfig(): Promise<any> {
        return new Promise<any> ((resolve, reject) => {
            const test = this.httpRequest.get('https://jsonplaceholder.typicode.com/users/1/todos?id=48').subscribe(
                response => {
                    resolve(response);
                },
                error => { reject(console.log('somethings gone wrong')) }
            );
        });
    }

}
