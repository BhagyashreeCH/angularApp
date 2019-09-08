import { Directive, ElementRef, Renderer2, OnInit, Input} from '@angular/core';

@Directive({
  selector: '[appCustomdirective]'
})
export class CustomdirectiveDirective implements OnInit{
 @Input() defaultcolor: string;
  constructor(private elementRef: ElementRef,private rendererEle: Renderer2) { }
  ngOnInit(){
    const ptag = this.rendererEle.createElement('p');
    const text = this.rendererEle.createText("hello is coming from custom directive");
    this.rendererEle.appendChild(ptag, text);
    this.rendererEle.appendChild(this.elementRef.nativeElement, ptag);
    this.rendererEle.setStyle(this.elementRef.nativeElement, "color", this.defaultcolor );
  }
}
