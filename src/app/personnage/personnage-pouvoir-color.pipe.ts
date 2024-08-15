import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'PersonnagePouvoirColorPipe',
  standalone: true
})
export class PersonnagePouvoirColorPipe implements PipeTransform {

  transform(type: string): string {
  
    let color: string;
  
    switch (type) {
      case 'Vie':
        color = 'green lighten-1';
        break;
      case 'Mort':
        color = 'red lighten-1';
        break;
      case 'Voyance':
        color = 'yellow lighten-1';
        break;
      default:
        color = 'grey';
        break;
    }
  
    return 'chip ' + color;
  
  }

}
