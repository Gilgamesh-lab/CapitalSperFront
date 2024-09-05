import { Directive, ElementRef, HostListener , Input, input} from '@angular/core';

@Directive({
  selector: '[BorderCardDirective]',
  standalone: true,
})
export class BorderCardDirective {
  carteCamp = input.required<string>();
  private initialColor: string;

  constructor(private el: ElementRef) {
    this.initialColor = this.el.nativeElement.style.borderColor;
    this.el.nativeElement.style.borderWidth = '2px';
  }

  @Input('BorderCardDirective') borderColor: string;




  @HostListener('mouseenter') onMouseEnter() {
    const color = this.getBorderColor();
    this.setBorder(color);
  }

  @HostListener('mouseleave') onMouseLeave() {
    const color = this.initialColor;
    this.setBorder(color);
  }

  private setBorder(color: string) {
    this.el.nativeElement.style.borderColor = color;
  }

  private getBorderColor() {
    return this.getcarteColor(this.carteCamp());
  }

  getcarteColor(type: string) {
    switch (type) {
      case 'Loups-Garous':
        return '#EF5350';
      case 'Village':
        return '#42A5F5';
      default:
        return '#303030';
    }
  }
}
