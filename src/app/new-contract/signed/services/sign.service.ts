import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private readonly APIUrl = "https://localhost:44353/api/";

  constructor(private http: HttpClient) { }

  getAllAddedSign() {
    return this.http.get<any>(this.APIUrl + 'Sign');
  }

  createSign(val: any) {
    return this.http
      .post<any>(
        'https://localhost:44353/api/Sign',
        val,
        this.httpOptions
      );
  }
}
