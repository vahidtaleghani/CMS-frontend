import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BASEURL } from 'src/app/url';


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
    const id = sessionStorage.getItem('Id') == null ? '0' : sessionStorage.getItem('Id');
    return this.http.get<any>(BASEURL + 'Contract/'  + id);
  }

  constructor(private http: HttpClient) { }

  startNewContract(requestBody: any){
    return this.http
    .post<any>(
      BASEURL + 'Contract',
      requestBody,
      this.httpOptions
    )
  }
}
