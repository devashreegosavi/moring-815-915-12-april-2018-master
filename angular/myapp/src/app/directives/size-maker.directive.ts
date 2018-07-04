import { Directive, ElementRef, Renderer2, HostBinding, OnInit, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[ckSizer]'
})
export class SizeMakerDirective implements OnInit{
 
  @HostBinding('style.border')
  rdBrd : string;

  @Input('ckSizer')
  @HostBinding('style.width')
  sz : string

  constructor(
    // private elRf : ElementRef,
    // private rend : Renderer2
  ) { 
    //console.log(this.elRf)
    //this.elRf.nativeElement.style.border = '1px solid red'
    //this.rend.setStyle(this.elRf.nativeElement, 'border', '1px solid red')
   
  }

  ngOnInit(): void {
    this.rdBrd = '1px solid red'
    //this.sz = '300px'
  }

  @HostListener('mouseenter')
  mouseIn() {
    this.sz = '350px'
  }

  @HostListener('mouseleave')
  mouseOut() {
    this.sz = '300px'
  }
}
