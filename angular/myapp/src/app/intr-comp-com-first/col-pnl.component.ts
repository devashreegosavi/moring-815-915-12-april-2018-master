import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-col-pnl',
  template: `
    <div [class]="alTyp">
      Welcome to codekul, where you will learn <strong>5th generation technologies</strong>
    </div> 
  `,
  styles: []
})
export class ColPnlComponent implements OnInit {

  @Input()
  alTyp : string;

  constructor() { }

  ngOnInit() {
    this.alTyp = `alert alert-primary`
  }
}
