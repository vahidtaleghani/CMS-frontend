import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private readonly APIUrl = "https://localhost:44353/api/";

  constructor(private http: HttpClient) { }


  getAllDepartments(){
    return this.http.get<any>(this.APIUrl + 'DepartmentType');
  }

  getSelectedDepartments(){
    return this.http.get<any>(this.APIUrl + 'Department');
  }


  createDepartment(val: any) {
    return this.http
      .post<any>(
        'https://localhost:44353/api/Department',
        val,
        this.httpOptions
      );
  }
  deleteDepartment(id: number){
    return this.http.delete('https://localhost:44353/api/Department/'+id);
  }
}