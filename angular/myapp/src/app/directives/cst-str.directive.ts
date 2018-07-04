import { Directive, ViewContainerRef, TemplateRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[myStr]'
})
export class CstStrDirective implements OnInit {

  @Input('myStr')
  condition: boolean

  constructor(
    private tmRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {
    console.log(tmRef)
    console.log(vcRef)
  }

  ngOnInit(): void {
    if (!this.condition) {
      this.vcRef.createEmbeddedView(this.tmRef)
    }
    else {
      this.vcRef.clear()
    }
  }
}
