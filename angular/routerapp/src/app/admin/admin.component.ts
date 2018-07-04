import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  adNm : string
  constructor(
    private actRt: ActivatedRoute
  ) { }

  ngOnInit() {
    this.actRt.params.subscribe(
      prms => this.adNm = prms['adNm']
    )
  }
}
