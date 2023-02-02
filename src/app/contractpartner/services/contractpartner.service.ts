import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BASEURL } from 'src/app/url';

@Injectable({
  providedIn: 'root'
})
export class ContractpartnerService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  
  constructor(private http: HttpClient) { }

  getContractTypeOptions(): Observable<any[]> {
    const response = this.http.get<any>(BASEURL+ 'ContractType');
    console.log(response);
    return response;
   }
 
   getContractStatusOptions(): Observable<any[]> {
    const response = this.http.get<any>(BASEURL+ 'ContractStatus');
    console.log(response);
    return response;
   }

  getAllContractPartners() : Observable<any[]> {
    const response = this.http.get<any>(BASEURL+ 'Contractor'+ '/allContractors');
    console.log(response);
    return response;
   }

}
