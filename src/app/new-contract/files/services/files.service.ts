import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BASEURL } from 'src/app/url';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

   httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' ,'Content-Disposition': 'form-data'})
  }; 
 
 /*  httpOptions = {
    headers: new HttpHeaders().set('Content-Type', 'multipart/form-data')
  };  */

  constructor(private http: HttpClient) { }

  getAllFiles() {
    return this.http.get<any>(BASEURL + 'File');
  }

  createFile(val: any) {
    return this.http.post<any>(BASEURL+ 'File',val, this.httpOptions);
  }

  deleteFile(id: number){
    return this.http.delete(BASEURL+ 'File/'+id);
  }
}
