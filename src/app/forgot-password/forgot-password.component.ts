import { Component, OnInit } from '@angular/core';

import { AppService } from '../app.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  email:string = '';
  errDiv:boolean = false;
  successDiv:boolean = false;
  message:string;

  constructor(private _appservice:AppService) { }

  ngOnInit() {
  }

  submit(){
    this.errDiv = false;
    this.successDiv = false;

    if(!this.email && (this.email).trim().length === 0){
      this.errDiv = true;
      this.message = 'Please enter your email address';
    } else if(!this.FnIsEmail(this.email)){
      this.errDiv = true;
      this.message = 'Please enter a valid email address';
    } else {

      this._appservice.forgot_password(this.email).subscribe((response) => {
        console.log("Response : ",response);
        if(response.success){
          this.successDiv = true;
          this.message = response.message;
        } else {
          this.errDiv = true;
          this.message = response.message;
        }
      })

    }
  }

  FnIsEmail(email) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

}
