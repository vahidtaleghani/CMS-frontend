import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LiabilityService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private readonly APIUrl = "https://localhost:44353/api/";

  constructor(private http: HttpClient) { }

  getLiabilityTypeOptions(): Observable<any[]> {
    const response = this.http.get<any>(this.APIUrl + 'LiabilityType');
    return response;
  }


  getLiabilites(){
    return this.http.get<any>(this.APIUrl + 'Liability');
  }


  createLiability(val: any) {
    return this.http
      .post<any>(
        'https://localhost:44353/api/Liability',
        val,
        this.httpOptions
      );
  }

  deleteLiability(id: number){
    return this.http.delete('https://localhost:44353/api/Liability/'+id);
  }
}
