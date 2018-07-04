import { Directive, HostBinding, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.show')
  shwCls: boolean = false

  @Output('appDropdown')
  state : EventEmitter<boolean> = new EventEmitter()

  constructor() { }

  @HostListener('click')
  onClick() {
    this.shwCls = !this.shwCls
    this.state.emit(this.shwCls)
  }

  @HostListener('mouseenter')
  mouseIn() {
    this.shwCls = !this.shwCls
    this.state.emit(this.shwCls)
  }
}
