import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-second',
  template: `
    <p>
      my-second works!
    </p>
  `,
  styles: [
    `
    p {
      border : 1px solid red;
    } 
    `
  ]
})
export class MySecondComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
