import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FileService {

  constructor(
    private http: HttpClient
  ) { }

  saveFile(txt: string) {
    return this.http.post('http://localhost:3000/flDt', {
      dt: txt
    })
  }
}
