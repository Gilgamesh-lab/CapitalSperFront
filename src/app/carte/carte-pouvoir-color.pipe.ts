import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cartePouvoirColorPipe',
  standalone: true
})
export class cartePouvoirColorPipe implements PipeTransform {

  transform(type: number, bouton: boolean): string {
  
    let color: string;
  
    switch (type) {
      case 1:
        color = 'yellow';
        break;
      case 2:
        color = 'light-green';
        break;
      case 3:
        color = 'red';
        break;
      case 4:
        color = 'orange';
        break;
      case 5:
        color = 'purple';
        break;
      case 6:
        color = 'cyan';
        break;
      case 7:
        color = 'pink';
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
      color += ' accent-1';
    }

    else if(type == 2 ){
      color += ' accent-3';
    }

    else if(type == 4 ){
      color += ' lighten-1';
    }

    else if(type == 5 ){
      color += ' accent-4';
    }

    else if(type == 6 || type == 7 ){
      color += ' accent-2';
    }
  
    return color;
  
  }

}
