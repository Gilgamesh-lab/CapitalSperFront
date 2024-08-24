import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'PersonnageCampColorPipe',
  standalone: true
})
export class PersonnageCampColorPipe implements PipeTransform {

  transform(type: number): string {
  
    let color: string;
  
    switch (type) {
      case 1:
        color = 'blue lighten-1';
        break;
      case 2:
        color = 'red lighten-1';
        break;
      default:
        color = 'grey';
        break;
    }
  
    return 'chip ' + color;
  
  }
}
