import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mask'
})
export class MaskPipe implements PipeTransform {

  transform(value: string,maskChar : string,noOfChar : number): any {
    let newValue = '';
    for(let i=1;i<=value.length-noOfChar;i++){
      newValue=newValue+maskChar;
    }
    newValue = newValue + value.substring(value.length-noOfChar,value.length);
    return newValue;
  }

}
