import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  qry = 'A'
  subs = ['Android', 'Maths', 'Machine Learning', 'Python', 'Physycs' ]
  
  nm : string = 'android'
  dt = new Date()
  constructor() { }

  ngOnInit() {
  }
  onBtn(dt : string) {
    this.subs.push(dt)
  }
}
