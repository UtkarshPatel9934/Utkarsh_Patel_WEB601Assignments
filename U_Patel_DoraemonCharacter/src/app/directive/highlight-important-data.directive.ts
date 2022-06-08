import { Directive, ElementRef,HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightImportantData]'
})
export class HighlightImportantDataDirective {

  // for the title 
  @Input() colour?: string;
  // for the type
  @Input() applyBorderToOnlyType?: boolean = false;
  // for the Hashtage
  @Input() applyColorToHashtags?: boolean = false;


  private checkIsHighlighted: boolean = false;
  private checkIsClicked: boolean = false;
  private checkHoverOnHashtag: boolean = false;
  private getTextColorForHashtags: string;

  // for the title 
  @HostBinding('style.backgroundColor')
  get applyBackgroundColor()
  {
    // return this.checkIsHighlighted ? "2px solid red" : "2px solid green";
    return this.checkIsClicked ? this.colour : "transparent";
  }
  // for the type 
  @HostBinding('style.border')
  get applyBorderColor()
  {
    return (this.checkIsHighlighted && this.applyBorderToOnlyType) ? "2px solid gold" : "none";
  }
 
  // for the Hashtag 
  @HostBinding('style.color')
  get applyTextColorOnHashtags()
  {
    return (this.checkHoverOnHashtag && this.applyColorToHashtags) ? "red" : this.getTextColorForHashtags;
  }


  constructor(private grabElm: ElementRef) {
    this.grabElm.nativeElement;
    this.getTextColorForHashtags = this.grabElm.nativeElement.style.color;
  }

  
  
  // for the type as wel as for hashtags when user enter in the tag
  @HostListener('mouseenter') onEnterInTypeTag() {
    this.checkIsHighlighted = !this.checkIsHighlighted;
    this.checkHoverOnHashtag = !this.checkHoverOnHashtag;
  }
  
  
  // for the type as wel as for hashtags when user exits in the tag
  @HostListener('mouseout') changeTextColorOfHashtags() {
    this.checkIsHighlighted = !this.checkIsHighlighted;
    this.checkHoverOnHashtag = !this.checkHoverOnHashtag;
  }
  
  // for the type only
  @HostListener('click') changeBackgroundOfTitle() {
    this.checkIsClicked = !this.checkIsClicked;
  }
  

}
