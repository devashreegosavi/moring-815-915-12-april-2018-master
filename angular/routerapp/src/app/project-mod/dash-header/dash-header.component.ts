import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dash-header',
  templateUrl: './dash-header.component.html',
  styleUrls: ['./dash-header.component.css']
})
export class DashHeaderComponent implements OnInit {

  itms = [
    {
      img : 'data:image/gif;base64,R0lGODlhAQABAIABAAJ12AAAACwAAAAAAQABAAACAkQBADs=',
      hdTxt : 'Android',
      txtDtl : 'Its Operating system'
    },
    {
      img : 'data:image/gif;base64,R0lGODlhAQABAIABAAJ12AAAACwAAAAAAQABAAACAkQBADs=',
      hdTxt : 'Apple',
      txtDtl : 'Its A Company'
    },
    {
      img : 'data:image/gif;base64,R0lGODlhAQABAIABAAJ12AAAACwAAAAAAQABAAACAkQBADs=',
      hdTxt : 'RiM',
      txtDtl : 'Its Research In Motion'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
