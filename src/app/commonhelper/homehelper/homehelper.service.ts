import { Injectable } from '@angular/core';
import { HttpcallsService } from 'src/app/generichttprequests/httpcalls/httpcalls.service';
import { HTTPPATH } from 'src/http.paths/http.paths';

@Injectable({
  providedIn: 'root',
})
export class HomehelperService {
  constructor(private httpCall: HttpcallsService) {}

  getChits() {
    let path = HTTPPATH.chits;
    return this.httpCall.getRequest(path);
  }

  getChit(id: any) {
    let path = HTTPPATH.chit;
    return this.httpCall.getRequest(path, id);
  }
}
