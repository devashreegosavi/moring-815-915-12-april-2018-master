import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Registration } from './reg';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RegService {

  constructor(
    private http: HttpClient
  ) { }

  reg( reg : Registration) : Observable<Object> {
    return this.http.post('http://localhost:3000/reg', reg)
  }

  regs() : Observable<Object> {
    return this.http.get('http://localhost:3000/regs')
  }
}
