import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title'
})
export class TitlePipe implements PipeTransform {

  transform(input: string, args: string): string {
    if(args=='male')
    return `Mr .${input.toUpperCase()}`
    else
    return `Mrs .${input.toUpperCase()}`;
  }

}
