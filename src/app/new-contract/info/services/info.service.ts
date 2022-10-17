import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
 
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private readonly APIUrl = "https://localhost:44353/api/";
  
  constructor(private http: HttpClient) { }

  getContractTypeOptions(): Observable<any[]> {
   const response = this.http.get<any>(this.APIUrl + 'ContractType');
   return response;
  }

 

  getContractStatusOptions(): Observable<any[]> {
   const response = this.http.get<any>(this.APIUrl + 'ContractStatus');
   return response;
  }

  getInfo(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + 'Info');
  }

  postInfo(val: any){
      return this.http
      .post<any>(
        'https://localhost:44353/api/info',
        val,
        this.httpOptions
      )
      .subscribe((responseData) => {
        console.log(responseData);
      });
    }
}
