import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BASEURL } from 'src/app/url';
@Injectable({
  providedIn: 'root'
})
export class CommentService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };


  constructor(private http: HttpClient) { }

  getAllAddedComment() {
    return this.http.get<any>(BASEURL+ 'Comment/' + sessionStorage.getItem('Id'));
  }

  createComment(val: any) {
    return this.http
      .post<any>(
        BASEURL+ 'Comment',
        val,
        this.httpOptions
      );
  }

  deleteComment(id: number){
    return this.http.delete('https://localhost:44353/api/Comment/'+id);
  }
}