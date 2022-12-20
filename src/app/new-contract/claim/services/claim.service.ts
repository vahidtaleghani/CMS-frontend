import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private readonly APIUrl = "https://localhost:44353/api/";

  constructor(private http: HttpClient) { }


  getLiabilites(){
    return this.http.get<any>(this.APIUrl + 'Claim');
  }


  createClaim(val: any) {
    return this.http
      .post<any>(
        'https://localhost:44353/api/Claim',
        val,
        this.httpOptions
      );
  }

  deleteClaim(id: number){
    return this.http.delete('https://localhost:44353/api/Claim/'+id);
  }
}