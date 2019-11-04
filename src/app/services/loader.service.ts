import {Injectable} from "@angular/core";
import {LoaderComponent} from "../shared/loader/loader.component";
import {BsModalService, BsModalRef} from "ngx-bootstrap";

@Injectable({
    providedIn: "root"
})
export class LoaderService {

    public bsModalRef: BsModalRef;

    constructor(public bsModalService: BsModalService) {

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
