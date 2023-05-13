import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appHoverScale]'
})
export class HoverScaleDirective {
  @HostBinding('style.transform') scale: string = 'scale(1)';
  @HostBinding('style.transition') transition: string = 'transform 0.3s ease-in-out';

  @HostListener('mouseenter') onMouseEnter() {
    this.scale = 'scale(1.05)';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.scale = 'scale(1)';
  }
}
