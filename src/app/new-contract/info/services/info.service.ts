import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BASEURL } from 'src/app/url';
@Injectable({
  providedIn: 'root'
})
export class InfoService {
 
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  
  constructor(private http: HttpClient) { }

  getContractTypeOptions(): Observable<any[]> {
   const response = this.http.get<any>(BASEURL+ 'ContractType');
   return response;
  }

 

  getContractStatusOptions(): Observable<any[]> {
   const response = this.http.get<any>(BASEURL+ 'ContractStatus');
   return response;
  }

  getInfo(): Observable<any[]> {
    return this.http.get<any>(BASEURL+ 'Info/' + sessionStorage.getItem('Id'));
  }

  postInfo(val: any){
      return this.http
      .post<any>(
        BASEURL+ 'Info',
        val,
        this.httpOptions
      )
      .subscribe((responseData) => {
        console.log(responseData);
      });
    }
}
