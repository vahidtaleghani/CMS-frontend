import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BASEURL } from 'src/app/url';
@Injectable({
  providedIn: 'root'
})
export class DutyService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) { }

  getAllDutyTypes() {
    return this.http.get<any>(BASEURL+ 'DutyType');
  }

  getAllAddedDuty() {
    return this.http.get<any>(BASEURL+ 'Duty/' + sessionStorage.getItem('Id'));
  }


  createDuty(val: any) {
    return this.http
      .post<any>(
        BASEURL+ 'Duty',
        val,
        this.httpOptions
      );
  }

  deleteDuty(id: number){
    return this.http.delete('https://localhost:44353/api/Duty/'+id);
  }
}