import { Directive, ElementRef, HostListener , Input} from '@angular/core';

@Directive({
  selector: '[BorderCardDirective]',
  standalone: true,
})
export class BorderCardDirective {
  private couleurInitial: string = '#f5f5f5';
  private couleurParDefaut: string = '#009688';
  private defaultHeight: number = 180;

  constructor(private el: ElementRef) { 
    console.log('ok')
    this.setHeight(this.defaultHeight);
    this.setBorder(this.couleurInitial);
  }

  @Input('appBorderCard') borderColor: string;




  @HostListener('mouseenter') onMouseEnter(){
    this.setBorder(this.borderColor || this.couleurParDefaut);
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.setBorder(this.couleurInitial);
  }

  private setHeight(height: number){
    this.el.nativeElement.style.height = '$(height)px';
  }

  private setBorder(color: string){
    let border = 'solid 4 px ' + color;
    this.el.nativeElement.style.border = border;
  }
}
