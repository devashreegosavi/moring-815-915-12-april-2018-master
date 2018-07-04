import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-btn-pnl',
  template: `
    <input type="button" class="btn btn-primary" value="Primary" (click)="chngAlTyp('primary')"/>
    <input type="button" class="btn btn-info" value="Info" (click)="chngAlTyp('info')"/>
    <input type="button" class="btn btn-warning" value="warning" (click)="chngAlTyp('warning')"/>
    <input type="button" class="btn btn-danger" value="Danger" (click)="chngAlTyp('danger')"/>
  `,
  styles: []
})
export class BtnPnlComponent implements OnInit {

  @Output()
  alChng : EventEmitter<string>;
  
  constructor() { 
    this.alChng = new EventEmitter()
  }

  ngOnInit() {
  }

  chngAlTyp(alTy : string) {
    this.alChng.emit(`alert alert-${alTy}`)
  }
}
