import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePipe',
})
export class DatePipePipe implements PipeTransform {
  transform(value: any): unknown {
    const day = String(value.getDate()).padStart(2, '0'),
      month = String(value.getMonth() - 1).padStart(2, '0'),
      year = String(value.getFullYear()).slice(-2);
    return `${day}/${month}/${year}`;
  }
}
