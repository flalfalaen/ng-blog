import {Injectable} from '@angular/core';
import {TwoService} from "./two.service";

export function f() {
    return new TwoService();
}

export class FourService {
    msgToConsole() {
        console.log('service FOUR --> from msgToConsole()');
    }

    msg() {
        console.log('service FOUR --> from msg()')
    }
}

export class ThreeService {

    msgToConsole() {
        console.log('service THREE --> from msgToConsole()');
    }

    msg() {
        console.log('service THREE --> from msg() this.b --> ')
    }

    msg_THREE() {
        console.log('service THREE --> from msg_THREE()');
    }
}

@Injectable({
    providedIn: 'root',

    // useClass: ThreeService,
    // useClass: TwoService,

    // useExisting: TwoService,

    useValue: {
      msgToConsole: function() {
        console.log('useValue msgToConsole()')
      },
      msg: function () {
        console.log('useValue msg()')
      },
      msg_ofValue: function () {
        console.log('useValue msg_ofValue()')
      },
    },

    useFactory: f,
    deps: [TwoService] //need to use when our service is placed in different file

})
export class OneService {

    public oneVariable = 'this is the string ONE of service ONE';

    constructor() {
    }

    msgToConsole() {
        console.log('service ONE \n\nmethod msgToConsole()');
    }

    msg() {
        console.log('service ONE \n\nmethod msg()')
    }

    msg_OneService() {
        console.log('service ONE --> method msg_OneService()')
    }
}
