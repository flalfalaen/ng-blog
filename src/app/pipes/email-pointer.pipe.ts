import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emailPointer'
})
export class EmailPointerPipe implements PipeTransform {

  transform(value: string): string {
    return value.toUpperCase() + ' - (you can mail this person any time)';
  }

}
