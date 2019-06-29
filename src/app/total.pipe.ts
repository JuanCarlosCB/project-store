import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  // transform(value: any, args?: any): any {
  //   return null;
  // }

  // transform(value: any, args?: any):any{
  //   return value.reduce((prev, item) => prev + item.stock, 0);
  // }

  transform(value: any, arg: string):any{
    return value.reduce((prev, item) => prev + item[arg], 0);
  }

}
