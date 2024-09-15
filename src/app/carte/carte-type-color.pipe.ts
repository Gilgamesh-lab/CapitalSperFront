import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carteTypeColor',
  standalone: true
})
export class CarteTypeColorPipe implements PipeTransform {

  transform(type: number): string {
  
    let color: string;
  
    switch (type) {
      case 1:
        color = 'deep-purple lighten-1';
        break;
      case 2:
        color = 'yellow accent-2';
        break;
      case 3:
        color = 'brown lighten-1';
        break;
      default:
        color = 'grey';
        break;
    }
  
    return 'chip ' + color;
  
  }

}
