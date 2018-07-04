import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-inner',
  template: `
    <p>
      second-inner works!
    </p>
  `,
  styles: [
    `.text-muted {
      
    }
    `
  ]
})
export class SecondInnerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
