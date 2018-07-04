import { ServicesService } from './services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-depndent',
  templateUrl: './depndent.component.html',
  styleUrls: ['./depndent.component.css']
})
export class DepndentComponent implements OnInit {

  dt: number;
  constructor(
    private service: ServicesService
  ) { }

  ngOnInit() {
    this.service.onEval(emDt => this.dt = emDt)
  }
}
