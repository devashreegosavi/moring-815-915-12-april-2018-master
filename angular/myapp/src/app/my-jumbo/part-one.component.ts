import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-part-one',
  template: `
  <h1 class="display-4">Welcome to codekul.com</h1>
  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  `,
  styles: []
})
export class PartOneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
