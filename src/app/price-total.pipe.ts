import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceTotal'
})
export class PriceTotalPipe implements PipeTransform {

  transform(value: any, args?: any): any {

      return value.stock * value.price;
    

  }

}
