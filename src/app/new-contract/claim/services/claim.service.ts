import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BASEURL } from 'src/app/url';
@Injectable({
  providedIn: 'root'
})
export class ClaimService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };


  constructor(private http: HttpClient) { }


  getLiabilites(){
    return this.http.get<any>(BASEURL+ 'Claim/' + sessionStorage.getItem('Id'));
  }


  createClaim(val: any) {
    return this.http
      .post<any>(
        BASEURL+ 'Claim',
        val,
        this.httpOptions
      );
    
  }

  deleteClaim(id: number){
    return this.http.delete('https://localhost:44353/api/Claim/'+id);
  }
}