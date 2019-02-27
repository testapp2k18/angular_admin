import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-email-verify',
  templateUrl: './email-verify.component.html',
  styleUrls: ['./email-verify.component.css']
})
export class EmailVerifyComponent implements OnInit {

  email:String;
  errDiv:boolean = false;
  successDiv:boolean = false;
  message:String;

  constructor(private _appservice:AppService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.emailVerify(this.route.snapshot.params);    
  }

  emailVerify(_accessToken){
    this._appservice.emailVerify(_accessToken).subscribe((response) => {
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
