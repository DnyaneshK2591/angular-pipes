import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'doubleImpure',
  pure: false,
})
export class DoubleImpurePipe implements PipeTransform {
  transform(value: number[]): number[] {
    console.log('Impure pipe called');
    return value.map(num => num * 2);
  }
}
