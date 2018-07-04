import { Component, OnInit, ElementRef, ViewChild, ContentChild } from '@angular/core';

@Component({
  selector: 'app-local-ref',
  templateUrl: './local-ref.component.html',
  styleUrls: ['./local-ref.component.css']
})
export class LocalRefComponent implements OnInit {

  @ViewChild('myNm')
  myNm: ElementRef

  @ContentChild('ttl')
  ttl : ElementRef

  typed: string;
  constructor() { }

  ngOnInit() {
    this.myNm.nativeElement.style.border = '1px solid red'
    this.myNm.nativeElement.onclick = () => console.log(`Clicked`)
  }

  smtngTypd(txt: string) {
    this.typed = txt
  }
}
