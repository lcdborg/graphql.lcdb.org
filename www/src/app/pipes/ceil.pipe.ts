import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ceil'
})
export class CeilPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return Math.ceil(value);
  }

}
