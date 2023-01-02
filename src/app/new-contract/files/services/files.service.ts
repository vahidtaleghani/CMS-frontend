import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FilesService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'}),
  };

  private readonly APIUrl = "https://localhost:44353/api/";

  constructor(private http: HttpClient) { }

  getAllFiles() {
    return this.http.get<any>(this.APIUrl + 'File');
  }

  createFile(val: any) {
    return this.http.post<any>('https://localhost:44353/api/File',val,this.httpOptions);
  }

  deleteFile(id: number){
    return this.http.delete('https://localhost:44353/api/File/'+id);
  }

  public uploadProfilePicture(data){
    var url = "https://localhost:44353/api/File";
    return this.http.post(url, data,this.httpOptions);
  }

}
