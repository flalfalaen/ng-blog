import {Injectable} from "@angular/core";
import {LoaderComponent} from "../shared/loader/loader.component";
import { LogInSignInFormComponent } from "../shared/log-in-sign-in-form/log-in-sign-in-form.component";
import {BsModalService, BsModalRef} from "ngx-bootstrap";

@Injectable({
    providedIn: "root"
})
export class LoaderService {

    public bsModalRef: BsModalRef;

    constructor(public bsModalService: BsModalService) {

    }

    showFrom() {
        this.bsModalRef = this.bsModalService.show(LogInSignInFormComponent, {
        })
    }

    showLoader() {
        this.bsModalRef = this.bsModalService.show(LoaderComponent, {
           class: 'modal-content',
        })
    }

    hideLoader() {
        this.bsModalRef.hide();

    }

}
