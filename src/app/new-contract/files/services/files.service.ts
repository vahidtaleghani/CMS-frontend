import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private readonly APIUrl = "https://localhost:44353/api/";

  constructor(private http: HttpClient) { }

  getAllFiles() {
    return this.http.get<any>(this.APIUrl + 'Fine');
  }


  createFile(val: any) {
    return this.http
      .post<any>(
        'https://localhost:44353/api/Fine',
        val,
        this.httpOptions
      );
  }

  deleteDuty(id: number){
    return this.http.delete('https://localhost:44353/api/Fine/'+id);
  }
}
