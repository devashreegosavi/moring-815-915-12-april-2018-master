import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-part-two',
  template: `
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <p class="lead">
    <a class="btn btn-primary btn-lg" role="button">Learn more</a>
  </p>
  `,
  styles: []
})
export class PartTwoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
