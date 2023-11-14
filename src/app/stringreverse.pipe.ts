import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringreverse',
  pure: false, //impure pipe is whenever ther is a change in the input paramater pipe is reloaded
  //pure pipe is loaded once but on each change of the input field it will check the logic
})
export class StringreversePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    // if (value) {
    //   value.split('').reverse().join('');
    // }
    console.log('pipe tag');

    return value.split('').reverse().join('');
  }
}
