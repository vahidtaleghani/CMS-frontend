import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BASEURL } from 'src/app/url';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };


  constructor(private http: HttpClient) { }


  getAllNotificationTypes() {
    return this.http.get<any>(BASEURL+ 'NotificationType');
  }

  getAllAddedNotification() {
    return this.http.get<any>(BASEURL+ 'Notification/'+ sessionStorage.getItem('Id'));
  }


  createNotification(val: any) {
    return this.http
      .post<any>(
        BASEURL+ 'Notification',
        val,
        this.httpOptions
      );
  }

  deleteNotification(id: number){
    return this.http.delete('https://localhost:44353/api/Notification/'+id);
  }
}