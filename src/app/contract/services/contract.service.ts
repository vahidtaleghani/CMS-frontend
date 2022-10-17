import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ContractService {
  private httpHeader = new HttpHeaders();

  // headers.append('Authorization', 'Bearer ' + localStorage.getItem("token"));
  httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer farasat-usertoken',
      }
    ),
  };

  getContractStatus() {
    return this.http.get<any>('https://localhost:44353/api/Contract');
  }

  constructor(private http: HttpClient) { }

  startNewContract(requestBody: any){
    return this.http
    .post<any>(
      'https://localhost:44353/api/Contract',
      requestBody,
      this.httpOptions
    )
  }
}
