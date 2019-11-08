import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TwoService {

  constructor() { }

  msgToConsole(){
    console.log('service TWO');
  }

}
