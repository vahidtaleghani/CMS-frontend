import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContractorService {
 
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private readonly APIUrl = "https://localhost:44353/api/";
  
  constructor(private http: HttpClient) { }

  getContractPartnerById(id: number): Observable<any[]> {
   const response = this.http.get<any>(this.APIUrl + 'ContractType/'+id);
   return response;
  }


  getAllContractPartners() : Observable<any[]> {
    const response = this.http.get<any>(this.APIUrl + 'Contractor/');
    return response;
   }

  postNewContractPartner(val: any){
      return this.http
      .post<any>(
        'https://localhost:44353/api/Contractor',
        val,
        this.httpOptions
      )
    }
}
