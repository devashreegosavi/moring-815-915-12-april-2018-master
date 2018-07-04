import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent  {

  status  = `Good`;
  tp = 'text'
  dt : string
  isCard = false

  constructor() { }

  btnClk() {
    this.dt = new Date().toString()
  }
}
