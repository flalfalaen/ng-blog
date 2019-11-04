import {Injectable, Injector} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import { Observable } from "rxjs";
import { finalize } from "rxjs/operators";
import { LoaderService } from "./loader.service";

@Injectable({
    providedIn: "root"
})
export class LoaderInterceptor { //implements HttpInterceptor{

    // constructor(public injector: Injector){}
        //todo this bloody scumbag piece of code by retard
    // intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //     const loader = this.injector.get(LoaderService);
    //     loader.showLoader();
    //     return next.handle(req).pipe(
    //         finalize(() => loader.hideLoader())
    //         // finalize(() => {        this.loader.hide();
    //         // })
    //     );
    // }

}
