import { Injectable } from '@angular/core';
import { TwoService } from "./two.service";

export function f() {
  return new TwoService();
}

@Injectable({
  providedIn: 'root',

  // useClass: TwoService,

  useExisting: TwoService,

  // useValue: {
  //   msgToConsole: function() {
  //     console.log('useValue msgToConsole()')
  //   },
  //   msg: function () {
  //     console.log('useValue msg()')
  //   }
  // },

  // useFactory: f,
  // deps: [TwoService]

})
export class OneService {

  constructor() { }

  msgToConsole(){
    console.log('service ONE \n\nmethod msgToConsole()');
  }

  msg() {
    console.log('service ONE \n\nmethod msg()')
  }

}
