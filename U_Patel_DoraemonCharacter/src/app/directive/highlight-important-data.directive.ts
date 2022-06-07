import { Directive, ElementRef,HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightImportantData]'
})
export class HighlightImportantDataDirective {

  // for the title 
  @Input() colour?: string;
  @Input() applyBorderToOnlyType?: boolean = false;


  private checkIsHighlighted: boolean = false;
  private checkIsClicked: boolean = false;

  // for the type 
  @HostBinding('style.border')
  get applyBorderColor()
  {
    // return this.checkIsHighlighted ? "2px solid red" : "2px solid green";
    return (this.checkIsHighlighted && this.applyBorderToOnlyType) ? "2px solid gold" : "none";
  }
 
  // for the title 
  @HostBinding('style.backgroundColor')
  get applyBackgroundColor()
  {
    // return this.checkIsHighlighted ? "2px solid red" : "2px solid green";
    return this.checkIsClicked ? this.colour : "transparent";
  }


  constructor(private grabElm: ElementRef) {
    this.grabElm.nativeElement;
  }



  // for the type
  @HostListener('mouseover') onEnterInTypeTag() {
    this.checkIsHighlighted = !this.checkIsHighlighted;
  }

  // for the type
  @HostListener('click') changeBackgroundOfTitle() {
    this.checkIsClicked = !this.checkIsClicked;
  }
  


}
