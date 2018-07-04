import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fp',
  templateUrl: './fp.component.html',
  styleUrls: ['./fp.component.css']
})
export class FpComponent implements OnInit {

  sid : string
  constructor(
    private actRt : ActivatedRoute
  ) { }

  ngOnInit() {
    this.actRt.queryParams.subscribe(
      qPrm => this.sid = qPrm['sid']
    )
  }
}
