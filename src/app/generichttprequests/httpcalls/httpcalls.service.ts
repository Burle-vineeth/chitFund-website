import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HTTPPATH } from 'src/http.paths/http.paths';

@Injectable({
  providedIn: 'root',
})
export class HttpcallsService {
  constructor(private http: HttpClient) {}

  postRequest(route: any, body: any) {
    return this.http.post(`${HTTPPATH.api}/${route}`, body);
  }

  getRequest(route: any, id?: any) {
    if (id) {
      return this.http.get(`${HTTPPATH.api}/${route}/${id}`);
    }
    return this.http.get(`${HTTPPATH.api}/${route}`);
  }
}
