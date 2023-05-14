import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHoverScale]'
})
export class HoverScaleDirective {
  @Input('appHoverScale') hoverScalePercentage: string = "5";

  @HostBinding('style.transform') scale: string = 'scale(1)';
  @HostBinding('style.transition') transition: string = 'transform 0.3s ease-in-out';

  @HostListener('mouseenter') onMouseEnter() {
    this.scale = `scale(${1 + Number(this.hoverScalePercentage) / 100})`;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.scale = 'scale(1)';
  }
}
