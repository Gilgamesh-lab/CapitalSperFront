import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cartePouvoirColorPipe',
  standalone: true
})
export class cartePouvoirColorPipe implements PipeTransform {

  transform(type: number): string {
  
    let color: string;
  
    switch (type) {
      case 1:
        color = 'yellow lighten-1';
        break;
      case 2:
        color = 'green lighten-1';
        break;
      case 3:
        color = 'red lighten-1';
        break;
      
      default:
        color = 'grey';
        break;
    }
  
    return 'chip ' + color;
  
  }

}
