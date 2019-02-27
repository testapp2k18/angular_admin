import { Component, OnInit } from '@angular/core';

import { AppService } from '../../app.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  data:any = {};
  showErr:boolean = false;
  showSuccess:boolean = false;
  _user = '';
  errMsg:String=''; 

  constructor(private _appservice:AppService) { }

  ngOnInit() {
    let userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
    this._user = userInfo.data.id;
    
  }

  submitPassword(){
    this.showErr = false;
    this.showSuccess = false;

    if(!this.data.pass)
    {
      this.showErr = true;
      this.errMsg = 'Please enter a new password';
    }
    else
    {
      if(this.data.pass.match(/\s/g))
      {
          this.showErr = true;
          this.errMsg = 'Password should not allowed to enter any spaces.';
      }
      else if(this.data.pass.length < 6)
      {
          this.showErr = true;
          this.errMsg = 'Password must be 6 characters long.';
      }
      else
      {
        if(this.data.pass !== this.data.conf_pass){
          this.showErr = true;
          this.errMsg = 'Password does not match.';
        }
        else
        {
          console.log('id',this._user);
          this._appservice.change_password({"password":this.data.pass,"_id":this._user}).subscribe(response=>{
            this.clear();
             if(response.success){
               this.showSuccess = true;
               this.errMsg = response.message;
             } else {
               this.showErr = true;
               this.errMsg = 'Error occured while updating password';
             }
          })

        } 

      }

    }

  }

  clear(){
      this.data.pass = '';
      this.data.conf_pass = '';
  }

}
