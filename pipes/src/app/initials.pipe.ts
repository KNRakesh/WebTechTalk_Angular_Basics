import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initials'
})
export class InitialsPipe implements PipeTransform {

  transform(value: string, ...args: any[]) {
    let values = value.split(' ');
    return values[0][0] + values[1][0];
  }

}
