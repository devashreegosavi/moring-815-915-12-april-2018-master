import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
 // pure : false not recommended
})
export class FilterPipe implements PipeTransform {

  transform(value: string[], args?: string): string[] {
    let fltrd = []
    if (args) {
      value.forEach(el => {
        if (args == el.charAt(0)) fltrd.push(el)
      })
      return fltrd;
    }
    return value
  }
}
