import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  mobs = [
    { id: 1, val: 'Android' },
    { id: 2, val: 'iOS' },
    { id: 3, val: 'Blackberry' },
    { id: 4, val: 'Moto' },
    { id: 5, val: 'Samsung' }
  ]
  myStl = {
    border: '1px solid red'
  }
  constructor() { }

  ngOnInit() {
  }
}
