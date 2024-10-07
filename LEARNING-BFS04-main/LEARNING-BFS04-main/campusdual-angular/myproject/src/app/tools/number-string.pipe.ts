import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberString'
})
export class NumberStringPipe implements PipeTransform {

  transform(value: number, delimiter:string): string {
    let strNumber: string = value.toString();
    let result: string = "";
    while(strNumber.length>3){
      let portion=delimiter+strNumber.slice(strNumber.length-3);
      strNumber = strNumber.slice(0,strNumber.length-3);
      result = portion.concat(result);
    }
    return strNumber.concat(result);
  }

}
