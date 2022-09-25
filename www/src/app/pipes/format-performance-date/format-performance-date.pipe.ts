import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPerformanceDate'
})
export class FormatPerformanceDatePipe implements PipeTransform {

  public transform(value: any, ...args: unknown[]): unknown {
    return value.year
      + '-' // '&#x2011;' // non-breaking dash
      + value.date.slice(0, 2)
      + '-' // '&#x2011;' // non-breaking dash
      + value.date.slice(3, 5);
  }
}
