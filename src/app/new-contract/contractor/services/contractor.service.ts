import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BASEURL } from 'src/app/url';
@Injectable({
  providedIn: 'root'
})
export class ContractorService {
 
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  
  constructor(private http: HttpClient) { }

  getContractPartnerById(id: number): Observable<any[]> {
   const response = this.http.get<any>(BASEURL+ 'ContractType/'+id);
   return response;
  }


  getAllContractPartners() : Observable<any[]> {
    const response = this.http.get<any>(BASEURL+ 'Contractor/' + sessionStorage.getItem('Id'));
    return response;
   }

  postNewContractPartner(val: any){
      return this.http
      .post<any>(
        BASEURL+ 'Contractor',
        val,
        this.httpOptions
      )
    }
}
