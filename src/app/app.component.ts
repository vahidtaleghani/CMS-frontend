import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  constructor(private router: Router,
    private translate: TranslateService) {
      translate.setDefaultLang('de');
      translate.use('de');
    
               }

  isSidenavOpen:boolean = false;

  title = 'CMS';
ngOnInit(): void {
  if (!localStorage.getItem('token')) {
    this.router.navigate(['/login'])
  }
}

  public logout() {
    if (localStorage.getItem('user') == null) {
      alert('already logged out!');
    }
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  }
  isLoggedIn() {
    if (localStorage.getItem('user') != null) {
      return true;
    } else {
      return false;
    }




  }
}

