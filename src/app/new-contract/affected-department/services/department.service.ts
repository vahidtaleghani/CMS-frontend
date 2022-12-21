import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BASEURL } from 'src/app/url';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };


  constructor(private http: HttpClient) { }


  getAllDepartments(){
    return this.http.get<any>(BASEURL + 'DepartmentType');
  }  

  getSelectedDepartments(){
    return this.http.get<any>(BASEURL + 'Department/' + sessionStorage.getItem('Id'));
  }


  createDepartment(val: any) {
    return this.http
      .post<any>(
        BASEURL + 'Department',
        val,
        this.httpOptions
      );
  }
}
