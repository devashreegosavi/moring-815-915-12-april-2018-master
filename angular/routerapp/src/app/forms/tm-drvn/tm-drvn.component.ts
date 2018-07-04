import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegService } from './reg.service';
import { Registration } from './reg';

@Component({
  selector: 'app-tm-drvn',
  templateUrl: './tm-drvn.component.html',
  styleUrls: ['./tm-drvn.component.css'],
  providers : [RegService]
})
export class TmDrvnComponent implements OnInit {

  myObj = {
    usNm: '',
    eml: '',
    pass: ''
  }

  arrRegs = []
  
  constructor(
    private reg : RegService
  ) { }

  ngOnInit() {
    this.reg.regs().subscribe(res => this.arrRegs = res as Array<any>)
  }

  onSub(frm: NgForm) {
    console.log(frm)
    console.log(frm.value)
    console.log(this.myObj)

    let rgs = new Registration()
    rgs.usNm = this.myObj.usNm
    rgs.eml = this.myObj.eml
    rgs.pass = this.myObj.pass

    this.reg.reg(this.myObj).subscribe(
      res => console.log(res)
    )
  }
}
