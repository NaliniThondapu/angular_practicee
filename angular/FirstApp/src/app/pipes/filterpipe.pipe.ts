import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpipe',
  pure:false//making this pipe is impure
})
export class FilterpipePipe implements PipeTransform {

  transform(list: any[], filterText: string): any {
    return list ? list.filter(item => item.name.search(new RegExp(filterText, 'i'))) : "";
  }

}
