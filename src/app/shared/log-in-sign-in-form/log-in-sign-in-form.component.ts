import {Component, OnInit} from '@angular/core';
import {NgForm, FormControl} from "@angular/forms";

@Component({
    selector: 'app-log-in-sign-in-form',
    templateUrl: './log-in-sign-in-form.component.html',
    styleUrls: ['./log-in-sign-in-form.component.scss']
})
export class LogInSignInFormComponent implements OnInit {
    answers = [{
        type: 'yes',
        text: 'yes'
    }, {
        type: 'no',
        text: 'no'
    }];

    constructor() {
    }

    ngOnInit() {
    }

    // submitForm(form: NgForm) {
    //   console.log('Submitted!', form);
    // }
}
