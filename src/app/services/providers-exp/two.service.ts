import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class TwoService {

    public oneVariable = 'this is the string TWO of service TWO';

    constructor() {
    }

    msgToConsole() {
        console.log('service TWO \n\nmethod msgToConsole()');
    }

    msg() {
        console.log('service TWO \n\nmethod msg()')
    }

    msg_TWO() {
        console.log('service TWO --> personal msg_TWO() method')
    }

}
