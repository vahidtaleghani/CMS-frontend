import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormControlName } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  
  hide = true;

  loginForm: FormGroup;
  username: FormControl;
  password: FormControl;

  constructor(private http: HttpClient, private router: Router, private location: Location) {}

  ngOnInit(): void {

    if (localStorage.getItem('token')) {
      this.location.back()
    }
    
    this.createFormControls();
    this.createForm();

  }

  onSubmit() {
    console.log(this.loginForm);
    this.setLoginStatus(this.loginForm.value.username, 1234);
    // this.http
    //   .post<{ message: string; token: Number }>(
    //     'http://localhost:5001/User',
    //     this.loginForm.value,
    //     this.httpOptions
    //   )
    //   .subscribe((responseData) => {
    //     console.log(responseData.message);
    //     alert(responseData.message);
    //     this.setLoginStatus(this.loginForm.value.email, responseData.token);
    //   });
  }

  setLoginStatus(user: string, token: Number) {
    localStorage.setItem('user', user);
    localStorage.setItem('token', token.toString());
    console.log()
    //alert('token set: ' + localStorage.getItem('token'));
    this.router.navigate(['/home']);
  }
  createFormControls() {
    this.username = new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ])
  }

  createForm() {
    this.loginForm = new FormGroup({
      username: this.username,
      password : this.password
    })
  }
}
