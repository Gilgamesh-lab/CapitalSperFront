import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carteCampColorPipe',
  standalone: true
})
export class carteCampColorPipe implements PipeTransform {

  transform(type: number): string {
  
    let color: string;
  
    switch (type) {
      case 1:
        color = 'blue lighten-1';
        break;
      case 2:
        color = 'red';
        break;
      default:
        color = 'grey';
        break;
    }
  
    return 'chip ' + color;
  
  }
}
