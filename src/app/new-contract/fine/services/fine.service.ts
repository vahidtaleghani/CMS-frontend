import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BASEURL } from 'src/app/url';
@Injectable({
  providedIn: 'root'
})
export class FineService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private readonly APIUrl = "https://localhost:44353/api/";

  constructor(private http: HttpClient) { }


  getAllFineTypes() {
    return this.http.get<any>(BASEURL+ 'FineType');
  }

  getAllAddedFines() {
    return this.http.get<any>(BASEURL+ 'Fine/' + sessionStorage.getItem('Id'));
  }


  createFine(val: any) {
    return this.http
      .post<any>(
        BASEURL+ 'Fine',
        val,
        this.httpOptions
      );
  }

  deleteFine(id: number){
    return this.http.delete('https://localhost:44353/api/Fine/'+id);
  }
}