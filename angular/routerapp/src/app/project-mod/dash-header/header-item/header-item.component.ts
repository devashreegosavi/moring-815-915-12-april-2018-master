import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-header-item',
  template: `
  <div class="col-6 col-sm-3 placeholder">
    <img [src]="imgDt" width="200" height="200" class="rounded-circle img-fluid" alt="Generic placeholder thumbnail">
      <h4>{{hdTxt}}</h4>
      <div class="text-muted">{{txtDtl}}</div>
  </div>
  `,
  styles: []
})
export class HeaderItemComponent implements OnInit, OnChanges {

  @Input()
  imgDt ?: string;

  @Input()
  hdTxt ?: string;

  @Input()
  txtDtl ?: string;

  constructor() { }

  ngOnChanges() {
    console.log(this.imgDt)
  }
  ngOnInit() {
  }

}
