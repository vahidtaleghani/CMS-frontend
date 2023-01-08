import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BASEURL } from 'src/app/url';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };


  constructor(private http: HttpClient) { }


  getAllCategoryTypes() {
    return this.http.get<any>(BASEURL+ 'CategoryType');
  }

  getAllAddedCategory() {
    return this.http.get<any>(BASEURL+ 'Category/' + sessionStorage.getItem('Id'));
  }


  createCategory(val: any) {
    return this.http
      .post<any>(
        BASEURL+ 'Category',
        val,
        this.httpOptions
      );
}

  deleteCategory(id: number){
    return this.http.delete(BASEURL+ 'Category/'+id);
  }
}