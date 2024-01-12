import { Pipe, PipeTransform } from '@angular/core'



@Pipe({
  name: 'canFly'
})
export class canFlyPipe {

  transform(value: boolean, canFly: string = 'no vuela'  ): string {

    // if(toUpper)return value.toUpperCase();

    // return value.toLocaleLowerCase();

    return ( value )?'vuela' : 'no vuela';



  }
}
