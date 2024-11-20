import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyleSearchbar]',
  standalone: false
})
export class StyleSearchbarDirective {
 

  constructor(private elementRef:ElementRef,private renderer:Renderer2) {}

  @HostListener('click')
    onClick():void{
     this.changeOpacity(1)
    
    }
    @HostListener('blur')
  onBlur(): void {
    this.changeOpacity(0.5)
  }
  changeOpacity(opacity:number):void{
    //this.elementRef.nativeElement.style.opacity = opacity;
    this.renderer.setStyle(this.elementRef.nativeElement,'opacity',opacity)
  }
}
