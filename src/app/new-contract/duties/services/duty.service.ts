import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DutyService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private readonly APIUrl = "https://localhost:44353/api/";

  constructor(private http: HttpClient) { }


  getAllDutyTypes() {
    return this.http.get<any>(this.APIUrl + 'DutyType');
  }

  getAllAddedDuty() {
    return this.http.get<any>(this.APIUrl + 'Duty');
  }


  createDuty(val: any) {
    return this.http
      .post<any>(
        'https://localhost:44353/api/Duty',
        val,
        this.httpOptions
      );
  }

  deleteDuty(id: number){
    return this.http.delete('https://localhost:44353/api/Duty/'+id);
  }
}