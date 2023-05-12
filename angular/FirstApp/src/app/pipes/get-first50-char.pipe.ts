import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getFirst50Char'
})
export class GetFirst50CharPipe implements PipeTransform {

  transform(value: string) {
    return value.substring(0, 50);
  }

}
