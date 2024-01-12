import { Pipe, PipeTransform } from '@angular/core'
import { Color } from '../interfaces/hero.interface';




@Pipe({
  name: 'color'
})
export class colorPipe {

  transform(value: number, canFly: string = 'black'  ): string {

    // if(toUpper)return value.toUpperCase();

    // return value.toLocaleLowerCase();

    return Color[value];

  }
}
