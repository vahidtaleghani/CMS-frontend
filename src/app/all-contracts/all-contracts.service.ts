import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BASEURL } from 'src/app/url';


@Injectable({
  providedIn: 'root'
})
export class AllcontractsService {

  constructor(private http: HttpClient) { }

  getAllContracts(){
    return this.http.get<any>(BASEURL + 'Contract/');
  }

  searchByText(text, filters){
    alert(text);
    if(filters.length === 0){
      return this.http.get<any>(BASEURL+ 'Contract/' + text);
    }

    const filterText = text + ' ' + filters;
    return this.http.get<any>(BASEURL+ 'Contract/' + filterText);
  }
}