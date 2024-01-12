import { Pipe, PipeTransform } from '@angular/core'



@Pipe({
  name: 'toggleCase'
})
export class toggleCasePipe implements PipeTransform {
  constructor() {}

  transform(value: string, toUpper: boolean = false  ): string {

    // if(toUpper)return value.toUpperCase();

    // return value.toLocaleLowerCase();

    return ( toUpper )?value.toUpperCase() : value.toLowerCase();



  }
}
