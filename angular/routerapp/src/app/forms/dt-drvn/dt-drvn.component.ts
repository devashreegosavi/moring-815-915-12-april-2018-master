import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-dt-drvn',
  templateUrl: './dt-drvn.component.html',
  styleUrls: ['./dt-drvn.component.css']
})
export class DtDrvnComponent implements OnInit {

  myObj = {
    usNm: 'android',
    eml: 'android@gmail.com',
    pass: '1234'
  }
  frmGrp: FormGroup
  constructor(
    private bldr: FormBuilder
  ) { }

  ngOnInit() {
    this.frmGrp = this.bldr.group({
      usNm: ['', Validators.required, this.myAsyncValidator],
      eml: ['', Validators.compose([
        Validators.required, Validators.email, this.myValidator
      ])],
      pass: ['', Validators.required]
    })
  }

  myValidator(c: AbstractControl): ValidationErrors | null {
    if (c.value.charAt(0) == 'a') {
      return null
    }
    return { sfa: true }
  }

  myAsyncValidator(c: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return new Promise((res, rej) => setTimeout(() => {
      if (c.value.charAt(0) == 'a') {
        res(null)
      }
      res({ sfa: false })
    }, 1500))
  }

  onSub() {
    console.log(this.frmGrp)
  }
}
