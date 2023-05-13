import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seeMore'
})
export class SeeMorePipe implements PipeTransform {

  transform(title:string , count:number): unknown {
    return title?.split(/\s/).slice(0,count).join(" ");
  }

}
