import { FileService } from './file.service';
import { PostCode } from './data-model';
import { WebService } from './web.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IntervalObservable } from "rxjs/observable/IntervalObservable";
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-http-observables',
  templateUrl: './http-observables.component.html',
  styleUrls: ['./http-observables.component.css']
})
export class HttpObservablesComponent implements OnInit, OnDestroy {

  cntr: number
  mySub: Subscription
  itvrSub: Subscription
  postCode: PostCode
  fileTxt: string

  constructor(
    private web: WebService,
    private file : FileService
  ) { }

  ngOnInit() {

    this.mySub = this.myObservable().subscribe(
      num => console.log(num),
      this.globalErrorHandler,
      () => console.log('On Complete')
    )

    this.itvrSub = IntervalObservable.create(1000).subscribe(
      it => this.cntr = it,
      this.globalErrorHandler
    )

    this.web.randomCodes().subscribe(
      res => this.postCode = res as PostCode,
      this.globalErrorHandler
    )

    this.web.postCode().subscribe(
      res => console.log(res)
    )
  }

  myObservable(): Observable<number> {
    return Observable.create(sub => {
      // it perform operation and give you next, error and completion

      for (let i = 0; i < 100; i++) {
        sub.next(i)

        if (i > 100) sub.error("This is error")
      }
      sub.complete()
    })
  }
  globalErrorHandler(err: Error) {

  }
  ngOnDestroy(): void {
    this.itvrSub.unsubscribe()
    this.mySub.unsubscribe()
  }

  onSave() {
    this.file.saveFile(this.fileTxt).subscribe(
      res => console.log(res),
      err => console.log(err),
      () => console.log('Complete')
    )
  }
}
