import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carteTypeColor',
  standalone: true
})
export class CarteTypeColorPipe implements PipeTransform {

  transform(type: number, bouton: boolean): string {
  
    let color: string;
  
    switch (type) {
      case 1:
        color = 'deep-purple';
        break;
      case 2:
        color = 'yellow';
        break;
      case 3:
        color = 'brown';
        break;
      default:
        color = 'grey';
        break;
    }

    if(bouton){
      color = "chip " + color;
    }
    else{
      color += "-text";
    }

    if(type == 1 || type == 3){
      color += ' lighten-1';
    }

    else if(type == 2 ){
      color += ' accent-2';
    }
  
    return color;
  
  }

}
