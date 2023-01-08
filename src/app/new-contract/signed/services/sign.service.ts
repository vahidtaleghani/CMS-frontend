import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BASEURL } from 'src/app/url';

@Injectable({
  providedIn: 'root'
})
export class SignService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };


  constructor(private http: HttpClient) { }

  getAllAddedSign() {
    return this.http.get<any>(BASEURL + 'Sign/' + sessionStorage.getItem('Id'));
  }

  createSign(val: any) {
    return this.http
      .post<any>(
        BASEURL + 'Sign',
        val,
        this.httpOptions
      );
  }

  deleteSign(id: number){
    return this.http.delete('https://localhost:44353/api/Sign/'+id);
  }
}