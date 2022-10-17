import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private readonly APIUrl = "https://localhost:44353/api/";

  constructor(private http: HttpClient) { }


  getAllNotificationTypes() {
    return this.http.get<any>(this.APIUrl + 'NotificationType');
  }

  getAllAddedNotification() {
    return this.http.get<any>(this.APIUrl + 'Notification');
  }


  createNotification(val: any) {
    return this.http
      .post<any>(
        'https://localhost:44353/api/Notification',
        val,
        this.httpOptions
      );
  }
}
