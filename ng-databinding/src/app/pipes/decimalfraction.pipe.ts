import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimalfraction'
})
export class DecimalfractionPipe implements PipeTransform {

  transform(value: number, numberofDigits: number = 1): string {
    //pipe logic
    console.log('pipe is working')
    return  value.toFixed(numberofDigits)
  }

}
