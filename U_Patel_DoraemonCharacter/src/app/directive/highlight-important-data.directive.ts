import { Directive, ElementRef,HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightImportantData]'
})
export class HighlightImportantDataDirective {

  // @Input() colour?: string;
  private checkIsHighlighted: boolean = false;
  // private grabTypeEle;

  @HostBinding('style.border')
  get applyBorderColor()
  {
    // return this.checkIsHighlighted ? "2px solid red" : "2px solid green";
    return this.checkIsHighlighted ? "2px solid gold" : "none";
  }


  constructor(private grabElm: ElementRef) {
    this.grabElm.nativeElement.style.border;
  }



  @HostListener('mouseover') onEnterInTypeTag() {
    this.checkIsHighlighted = !this.checkIsHighlighted;
  }



}
