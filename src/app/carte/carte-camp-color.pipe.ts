import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carteCampColorPipe',
  standalone: true
})
export class carteCampColorPipe implements PipeTransform {

  transform(type: number, bouton: boolean): string {
  
    let color: string;
  
    switch (type) {
      case 1:
        color = 'blue';
        break;
      case 2:
        color = 'red';
        break;
      case 3:
          color = '607d8b blue-grey';
          break;
      case 4:
          color = 'orange';
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
    if(type == 1){
      color += ' lighten-1';
    }

    else if(type == 8 ){
      color += ' darken-4';
    }
  
    return color;
  
  }
}
