import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseMailboxlayer } from '../models/responseMailboxlayer.model';

@Injectable({
  providedIn: 'root'
})
export class MailCheckService {

  apiUrl = "https://apilayer.net/api/check?access_key=f20f7ae318c34b92ee6a685fac758feb";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private httpClient: HttpClient
  ) {

  }

  public checkIfMailIsValid(email: string): Observable<ResponseMailboxlayer> {
    return this.httpClient.get<ResponseMailboxlayer>(this.apiUrl + "&email=" + email);
  }
}
