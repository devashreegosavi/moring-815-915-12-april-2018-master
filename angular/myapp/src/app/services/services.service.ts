import { DataService } from './data.service';
import { EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable()
export class ServicesService {

  private os: number = 0;
  private em: EventEmitter<number> = new EventEmitter()

  constructor(
    private data : DataService
  ) { }

  get osVer() {
    return this.os
  }

  evaluate() {
    this.os += 5
    this.em.emit(this.os)
  }

  onEval(onDt: (dt: number) => void) {
    this.em.subscribe(emDt => onDt(emDt))
  }
}
