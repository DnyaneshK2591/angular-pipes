import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'doublePure',
  pure: true, // This is the default, but explicitly stating it for clarity
})
export class DoublePurePipe implements PipeTransform {
  transform(value: number[]): number[] {
    console.log('Pure pipe called');
    return value.map(num => num * 2);
  }
}
