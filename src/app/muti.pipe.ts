import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'muti'
})
export class MutiPipe implements PipeTransform {

  transform(value:number,multiply:string):number{
    let mul=parseFloat(multiply);
    return mul*value
  }
}
