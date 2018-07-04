import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class WebService {

  constructor(
    private http : HttpClient
  ) { }

  randomCodes() : Observable<Object> {
    return this.http.get('http://api.postcodes.io/random/postcodes')
  }

  postCode() : Observable<Object> {
    return this.http.post('http://api.postcodes.io/postcodes', {
      postcodes : ['OX49 5NU']
    }, {})
  }
}
