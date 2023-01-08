import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BASEURL } from 'src/app/url';

@Injectable({
  providedIn: 'root'
})
export class LiabilityService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };


  constructor(private http: HttpClient) { }

  getLiabilityTypeOptions(): Observable<any[]> {
    const response = this.http.get<any>(BASEURL+ 'LiabilityType');
    return response;
  }


  getLiabilites(){
    return this.http.get<any>(BASEURL+ 'Liability/' + sessionStorage.getItem('Id'));
  }


  createLiability(val: any) {
    return this.http
      .post<any>(
        BASEURL+ 'Liability',
        val,
        this.httpOptions
      );
  }

  deleteLiability(id: number){
    return this.http.delete('https://localhost:44353/api/Liability/'+id);
  }
}
