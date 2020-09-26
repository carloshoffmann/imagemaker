import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SwapiWrapperService {

  constructor(protected http: HttpClient) { }

  getData(page=1) {
    return this.http.get('http://localhost/api/list/people?page='+page);
  }

}
