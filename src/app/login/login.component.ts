import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidationServiceService } from './../validation-service.service';
import { Router } from '@angular/router';

import { AppService } from '../app.service';
/**
*  This class represents the lazy loaded LoginComponent.
*/

@Component({
  selector: 'app-login-cmp',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit { 

  title:String = 'Money Hitz Admin Login';
  errDiv : boolean = false;
  errMsg:String = ''; 
  loginForm:FormGroup;
  role:Array<any> = ['admin', 'ao'];
  data:any = {email:'', password: ''};
  constructor(private FB:FormBuilder,public router:Router,private _appservice:AppService){
       this.loginForm = FB.group({
         'email': ['', [Validators.required, ValidationServiceService.emailValidator]],
         'password': ['', Validators.minLength(6)]
       })
  }

  ngOnInit() {
    let token = sessionStorage.getItem("accessToken");
    if(token){
      this.router.navigate(['dashboard/home']);
    }
  }

  doLogin(data){

    if(!data.email && (data.email).trim().length === 0){
      this.errDiv = true;
      this.errMsg = 'Please enter your email address';
    } else if(!this.FnIsEmail(data.email)){
      this.errDiv = true;
      this.errMsg = 'Please enter a valid email address';
    } else if(!data.password && (data.password).trim().length === 0){
      this.errDiv = true;
      this.errMsg = 'Please enter your password';
    }  else {

      this._appservice.login(data).subscribe((response)=>{
          if(response.success){
            if(response.data.role == 'admin'){

              sessionStorage.setItem("accessToken", response.data.token);
              sessionStorage.setItem("user_id", response.data.id);
              sessionStorage.setItem("userRole", response.data.role);
              sessionStorage.setItem("userInfo", JSON.stringify(response));
              this.router.navigate(['dashboard/home']);
            
          } else {

            this.errDiv = true;
            this.errMsg = 'You don\'t have permission to login into this section'; 
          }
          } else {
            this.errDiv = true;
            this.errMsg = response.message;
          }
      }) 
    }
  }

  FnIsEmail(email) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
}
