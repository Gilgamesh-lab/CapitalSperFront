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
        color = 'yellow accent-1';
        break;
      case 2:
        color = 'light-green accent-3';
        break;
      case 3:
        color = 'red';
        break;
      case 4:
        color = 'orange lighten-1';
        break;
      case 5:
        color = 'purple accent-4';
        break;
      case 6:
        color = 'cyan accent-2';
        break;
      
      default:
        color = 'grey';
        break;
    }
  
    return 'chip ' + color;
  
  }

}
