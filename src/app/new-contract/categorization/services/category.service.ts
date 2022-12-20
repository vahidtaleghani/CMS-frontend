import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private readonly APIUrl = "https://localhost:44353/api/";

  constructor(private http: HttpClient) { }


  getAllCategoryTypes() {
    return this.http.get<any>(this.APIUrl + 'CategoryType');
  }

  getAllAddedCategory() {
    return this.http.get<any>(this.APIUrl + 'Category');
  }


  createCategory(val: any) {
    return this.http
      .post<any>(
        'https://localhost:44353/api/Category',
        val,
        this.httpOptions
      );
  }
  deleteCategory(id: number){
    return this.http.delete('https://localhost:44353/api/Category/'+id);
  }
}