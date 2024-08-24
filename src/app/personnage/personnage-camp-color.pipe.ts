import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'PersonnageCampColorPipe',
  standalone: true
})
export class PersonnageCampColorPipe implements PipeTransform {

  transform(type: string): string {
  
    let color: string;
  
    switch (type) {
      case 'Loups-Garous':
        color = 'red lighten-1';
        break;
      case 'Villageois':
        color = 'blue lighten-1';
        break;
      default:
        color = 'grey';
        break;
    }
  
    return 'chip ' + color;
  
  }
}
