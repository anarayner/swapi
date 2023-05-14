import {AfterViewInit, Directive, ElementRef, HostListener, OnInit} from '@angular/core';

@Directive({
  selector: '[appFocus]'
})
export class FocusDirective implements OnInit, AfterViewInit{

  constructor(private el: ElementRef) { }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    this.el.nativeElement.focus()
  }

}
