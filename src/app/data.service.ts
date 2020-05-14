import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseURL = 'http://www.lottoland.com/api/drawings';
  constructor(public http: HttpClient) { }

  public getData() {
    return this.http.get(`${this.baseURL}/euroJackpot`);
  }

}
