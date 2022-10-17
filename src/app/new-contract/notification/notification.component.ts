import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Notification } from './models/notification';
import { NotificationType } from './models/notificationtype';
import { NotificationService } from './services/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  public notifications: Notification[] = [];
  public notification: Notification;
  public notificationTypes: NotificationType[] = [];

  displayedColumns: string[] = ['date', 'typ', 'email', 'recurring', 'edit'];

  constructor(private service: NotificationService,private router: Router) { }

  ngOnInit(): void {
    // this.notificationTypes = this.getAllNotificationTypes();
    // this.notifications = this.getAllAddNotification();
    this.notification = this.clearFormInputArea();
    this.loadPage();
  }

  isNumeric(num) {
    return !isNaN(num);
  }

  getNotificationTypeId(type: string): number {
    if (!this.isNumeric(type)) {
      return this.notificationTypes.filter(x => x.Type === type)[0].Id;
    }
    return Number(type);
  }

  getNotificationTypeById(id: number): string {
    return this.notificationTypes.filter(x => x.Id === id)[0].Type;
  }

  getNotificationById(id: number): Notification {
    return this.notifications.filter(x => x.Id === id)[0];
  }

  clearFormInputArea(): Notification {
    return new Notification(0, "Typ", "", "", "Datum");
  }


  loadPage() {
    let notificationTypes: NotificationType[] = [];

    this.service.getAllNotificationTypes().subscribe(data => {
      console.log(data['Data']);

      data['Data'].forEach(element => {
        notificationTypes.push(new NotificationType(element['Id'], element['Type']));
      })

      this.notificationTypes = notificationTypes;


      this.getAllAddedNotification();
    })
  }


  getAllAddedNotification() {
    let notifications: Notification[] = [];

    const data = this.service.getAllAddedNotification().subscribe(res => {
      console.log(res);
      for (let index = 0; index < res.length; index++) {
        const isRepeatitionAllowed = res[index]['IsRepeatitionAllowed'] === true ? 'yes' : 'no';
        notifications.push(new Notification(res[index]['Id'], this.getNotificationTypeById(res[index]['NotificationTypeId']), res[index]['Email'], isRepeatitionAllowed, res[index]['Date']));
      }

      this.notifications = notifications;
    });
  }


  hasFormFilledProperly(notificationForm: NgForm): boolean {
    let values = new Array();

    Object.entries(notificationForm.value).forEach(([key, value]) => values.push(value));

    if (values.includes("")) {
      return false;
    }
    return true;
  }

  submit(notificationForm: NgForm): void {
    console.log(notificationForm.value);
    if (this.hasFormFilledProperly(notificationForm)) {

      notificationForm.value['notificationTypeId'] = this.getNotificationTypeId(notificationForm.value['notificationTypeId']);

      let notification = {
        'id': this.notification.Id,
        'notificationTypeId': notificationForm.value['notificationTypeId'],
        'email': notificationForm.value['email'],
        'date': notificationForm.value['date'],
        'isRepeatitionAllowed': notificationForm.value['recurring'] === "yes" ? true : false
      }

      console.log(notification);


      this.service.createNotification(notification).subscribe(response => {
        console.log(response);
        this.getAllAddedNotification();
      })


    }
    else {
      alert("Error");
    }
  }

  edit(id: number) {
    this.notification = this.getNotificationById(id);
  }

  deleteById(id: number) {

  }
  gotoNextPage(){
    this.router.navigate(['contract/comments']); 
  }
  gotoLastPage(){
    this.router.navigate(['contract/duties']); 
  }
}
