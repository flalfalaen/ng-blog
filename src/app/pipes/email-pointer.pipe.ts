import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'emailPointer'
})
export class EmailPointerPipe implements PipeTransform {

  transform(value: string): string {
    if (value.split(" ").length > 2) {
      return value.split(' ').slice(0, 2).join(' ');
    } else if (value.split(" ").length > 3) {
      return value.split(' ').slice(0, 3).join(' ');
    }
  }
}
