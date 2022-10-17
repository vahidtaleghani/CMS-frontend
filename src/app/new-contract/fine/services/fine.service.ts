import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
    return this.http.get<any>(this.APIUrl + 'FineType');
  }

  getAllAddedFines() {
    return this.http.get<any>(this.APIUrl + 'Fine');
  }


  createFine(val: any) {
    return this.http
      .post<any>(
        'https://localhost:44353/api/Fine',
        val,
        this.httpOptions
      );
  }
}
